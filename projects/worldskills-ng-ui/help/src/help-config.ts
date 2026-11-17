import { InjectionToken } from '@angular/core';

/**
 * Help points per page, in display order. A point's position is its number on screen, so the
 * numbers stay stable (hidden points leave gaps) when writing and translating texts.
 *
 * Keep it a plain object literal of string arrays: `ws-help-check` reads this file.
 *
 * ```ts
 * export const HELP_PAGES: WsHelpPages = {
 *   reports: ['header', 'filters', 'results', 'export'],
 * };
 * ```
 */
export type WsHelpPages = Record<string, readonly string[]>;

export interface WsHelpConfig {
  /** The points of every page that has help (see {@link WsHelpPages}). */
  pages: WsHelpPages;
  /**
   * Translation prefix of the page texts: `<prefix>.<page>.<point>.title` / `.description`.
   * Defaults to `help`.
   */
  textPrefix?: string;
  /**
   * Console warnings about help that has drifted from the page (unknown or duplicate points,
   * missing texts). Defaults to Angular's dev mode.
   */
  warnings?: boolean;
}

export const WS_HELP_CONFIG = new InjectionToken<Required<WsHelpConfig>>('WS_HELP_CONFIG');
