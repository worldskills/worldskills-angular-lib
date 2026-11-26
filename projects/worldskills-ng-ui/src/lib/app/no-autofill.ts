import { DestroyRef, EnvironmentProviders, inject, provideEnvironmentInitializer } from '@angular/core';

/** The "don't autofill" hints browsers and the common password managers listen to. */
const ATTRIBUTES: Record<string, string> = {
  autocomplete: 'off', // browsers (Chrome, Edge, Safari, Firefox)
  'data-1p-ignore': '', // 1Password
  'data-lpignore': 'true', // LastPass
  'data-bwignore': '', // Bitwarden
  'data-form-type': 'other', // Dashlane
};

const SELECTOR = 'input:not([type="password"]):not([type="hidden"]):not([type="checkbox"]):not([type="radio"])'
  + ':not([data-allow-autofill]), textarea:not([data-allow-autofill])';

function mark(root: ParentNode): void {
  root.querySelectorAll<HTMLElement>(SELECTOR).forEach(el => {
    Object.entries(ATTRIBUTES).forEach(([name, value]) => {
      if (el.getAttribute(name) !== value) {
        el.setAttribute(name, value);
      }
    });
  });
}

/**
 * Turns off browser and password-manager autofill on the app's inputs. For admin apps whose
 * forms hold other people's details and searches, never the signed-in user's own name or email,
 * so autofill suggestions only get in the way (and can put the wrong person's data in a record).
 *
 * Applies to every text input and textarea as it appears, including ones PrimeNG renders, so new
 * pages need nothing. Password fields are left alone; add `data-allow-autofill` to an input to
 * keep autofill there.
 *
 *   providers: [provideWsNoAutofill(), …]
 */
export function provideWsNoAutofill(): EnvironmentProviders {
  return provideEnvironmentInitializer(() => {
    if (typeof document === 'undefined' || typeof MutationObserver === 'undefined') {
      return;
    }
    mark(document);
    const observer = new MutationObserver(changes => {
      changes.forEach(change => {
        change.addedNodes.forEach(node => {
          if (node instanceof HTMLElement) {
            if (node.matches(SELECTOR)) {
              mark(node.parentElement ?? node);
            }
            mark(node);
          }
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    inject(DestroyRef).onDestroy(() => observer.disconnect());
  });
}
