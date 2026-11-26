#!/usr/bin/env node
/**
 * ws-help-check: fails when an app's page help has drifted from its code, so help stays fresh.
 * Shipped with @worldskills/ng-ui; run it in lint or CI.
 *
 * Usage:
 *   npx ws-help-check --pages src/app/help-pages.ts [--src src] [--i18n src/assets/i18n/en.json]
 *                     [--prefix help] [--attr wsHelp] [--warn-only]
 *
 * Cross-checks four places:
 *   - routes:   `help: '<page>'` in route data (*.ts under --src)
 *   - pages:    the points per page given to provideWsHelp() (--pages, a .ts object literal or .json)
 *   - markers:  `wsHelp="<point>"` / `[wsHelp]="'<point>'"` in templates (*.html, inline *.ts)
 *   - texts:    `<prefix>.<page>.<point>.title` / `.description` in the English translations
 *
 * Problems (any of them fails the run unless --warn-only):
 *   - a route's page has no points, or a page with points is used by no route
 *   - a listed point is marked in no template (the section was removed or renamed)
 *   - a marker uses a point that no page lists
 *   - a listed point has no English title or description
 *   - texts left over for pages or points that no longer exist
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';

const args = parseArgs(process.argv.slice(2));
if (args.help || !args.pages) {
  console.log(
    'Usage: ws-help-check --pages <file> [--src src] [--i18n src/assets/i18n/en.json] ' +
      '[--prefix help] [--attr wsHelp] [--warn-only]',
  );
  process.exit(args.help ? 0 : 2);
}

const cwd = process.cwd();
const pagesFile = resolve(args.pages);
const srcDir = resolve(args.src ?? 'src');
const i18nFile = resolve(args.i18n ?? 'src/assets/i18n/en.json');
const prefix = args.prefix ?? 'help';
const attr = args.attr ?? 'wsHelp';

const pages = readPages(pagesFile);
const files = walk(srcDir).filter(
  (f) => (f.endsWith('.ts') || f.endsWith('.html')) && !f.endsWith('.spec.ts') && f !== pagesFile,
);

/** page -> files whose routes use it */
const routes = new Map();
/** point -> files that mark it */
const markers = new Map();
const routeRe = /\bhelp\s*:\s*['"]([\w-]+)['"]/g;
const markerRes = [
  new RegExp(`\\b${attr}\\s*=\\s*"([\\w-]+)"`, 'g'),
  new RegExp(`\\[${attr}\\]\\s*=\\s*"'([\\w-]+)'"`, 'g'),
];
for (const file of files) {
  const text = readFileSync(file, 'utf8');
  if (file.endsWith('.ts')) collect(routes, routeRe, text, file);
  for (const re of markerRes) collect(markers, re, text, file);
}

const texts = readTexts(i18nFile, prefix);
const problems = [];
const rel = (f) => relative(cwd, f);
const where = (set) => [...set].map(rel).join(', ');

for (const [page, inFiles] of routes) {
  if (!pages[page]) problems.push(`route help "${page}" (${where(inFiles)}) has no points in ${rel(pagesFile)}`);
}
for (const page of Object.keys(pages)) {
  if (!routes.has(page)) {
    problems.push(`page "${page}" is listed but no route sets help: '${page}' (only fine if the app calls setPage)`);
  }
}

const listed = new Set(Object.values(pages).flat());
for (const [page, points] of Object.entries(pages)) {
  for (const point of points) {
    if (!markers.has(point)) problems.push(`point "${page}.${point}" is marked nowhere: add ${attr}="${point}" or remove it from the list`);
    for (const part of ['title', 'description']) {
      if (!nonEmpty(texts?.[page]?.[point]?.[part])) {
        problems.push(`point "${page}.${point}" has no text ${prefix}.${page}.${point}.${part} in ${rel(i18nFile)}`);
      }
    }
  }
}
for (const [point, inFiles] of markers) {
  if (!listed.has(point)) problems.push(`${attr}="${point}" (${where(inFiles)}) is in no page's points`);
}

for (const [page, entries] of Object.entries(texts ?? {})) {
  if (!pages[page]) {
    problems.push(`leftover texts ${prefix}.${page}: no such page`);
    continue;
  }
  for (const point of Object.keys(entries ?? {})) {
    if (!pages[page].includes(point)) problems.push(`leftover text ${prefix}.${page}.${point}: not a point of "${page}"`);
  }
}

if (!problems.length) {
  const count = Object.values(pages).flat().length;
  console.log(`ws-help-check: ${Object.keys(pages).length} pages, ${count} points, all in step.`);
  process.exit(0);
}
console.error(`ws-help-check: ${problems.length} problem(s)\n` + problems.map((p) => `  - ${p}`).join('\n'));
process.exit(args['warn-only'] ? 0 : 1);

// ── helpers ────────────────────────────────────────────────────────────────────

function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (!a.startsWith('--')) continue;
    const key = a.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith('--')) out[key] = true;
    else out[key] = argv[++i];
  }
  return out;
}

/** The pages object: a .json file, or the first `{ … }` object literal of string arrays in a .ts file. */
function readPages(file) {
  const text = readFileSync(file, 'utf8');
  if (extname(file) === '.json') return JSON.parse(text);
  const body = text.slice(text.indexOf('{', text.indexOf('=')));
  const result = {};
  const entry = /(?:['"]([\w-]+)['"]|([\w$]+))\s*:\s*\[([^\]]*)\]/g;
  for (const m of body.matchAll(entry)) {
    result[m[1] ?? m[2]] = [...m[3].matchAll(/['"]([\w-]+)['"]/g)].map((x) => x[1]);
  }
  if (!Object.keys(result).length) {
    console.error(`ws-help-check: no pages found in ${file} (expected { page: ['point', …] })`);
    process.exit(2);
  }
  return result;
}

function readTexts(file, path) {
  let node = JSON.parse(readFileSync(file, 'utf8'));
  for (const part of path.split('.')) node = node?.[part];
  return node;
}

function collect(map, re, text, file) {
  for (const m of text.matchAll(re)) {
    if (!map.has(m[1])) map.set(m[1], new Set());
    map.get(m[1]).add(file);
  }
}

function nonEmpty(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function walk(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    if (name === 'node_modules' || name.startsWith('.')) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) out.push(...walk(full));
    else out.push(full);
  }
  return out;
}
