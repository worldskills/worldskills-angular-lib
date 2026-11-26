/**
 * Auto-generates translations.ts by scanning all *.json files in src/lib/i18n/.
 * Run automatically before building the library via the prebuild script.
 *
 * Usage: node projects/worldskills-ng-ui/scripts/generate-translations.mjs
 */

import { readdirSync, writeFileSync } from 'fs';
import { join, basename, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const i18nDir = join(__dirname, '../src/lib/i18n');
const outputFile = join(i18nDir, 'translations.ts');

const jsonFiles = readdirSync(i18nDir)
    .filter(f => f.endsWith('.json'))
    .sort();

if (jsonFiles.length === 0) {
    console.error('No JSON translation files found in', i18nDir);
    process.exit(1);
}

const names = jsonFiles.map(f => basename(f, '.json'));

const imports = names.map(name => `import ${name} from './${name}.json';`).join('\n');
const entries = names.join(', ');

const output = `// AUTO-GENERATED — do not edit manually.
// Add or update JSON files in src/lib/i18n/ and re-run the library build.
${imports}

export const wsNgUiTranslations: Record<string, Record<string, unknown>> = {
    ${entries},
};
`;

writeFileSync(outputFile, output, 'utf8');
console.log(`Generated translations.ts with: ${names.join(', ')}`);
