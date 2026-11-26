import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

/**
 * UI feature toggles: ship a feature switched off and turn it on per environment when it's ready,
 * or switch it off again without a rollback. They only hide things in the UI (they aren't
 * permissions; the API must still check access). Keep them few, and remove each toggle once its
 * feature is live everywhere.
 */
export interface WsFeatures<K extends string> {
  /** Whether the feature is switched on. Works anywhere, no injection needed. */
  isOn(feature: K): boolean;
  /** Route guard: a switched-off feature's page goes to `redirectTo` instead. */
  guard(feature: K, redirectTo?: string): CanActivateFn;
}

/**
 * Define the app's toggles, usually from the environment file, and export them:
 *
 * ```ts
 * // environment.ts:         features: { merge: true, reviewTasks: false }
 * // core/features.ts
 * export const features = wsFeatures(environment.features);
 *
 * // components
 * canMerge = features.isOn('merge');
 * // routes
 * { path: 'merge', canActivate: [features.guard('merge', '/organizations')], … }
 * ```
 *
 * The names are typed from the object, so a misspelt toggle fails the build.
 */
export function wsFeatures<K extends string>(config: Record<K, boolean>): WsFeatures<K> {
  const isOn = (feature: K) => config[feature] === true;
  return {
    isOn,
    guard: (feature, redirectTo = '/') => () => isOn(feature) || inject(Router).parseUrl(redirectTo),
  };
}
