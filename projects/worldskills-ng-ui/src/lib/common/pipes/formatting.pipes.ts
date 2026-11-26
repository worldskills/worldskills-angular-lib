import { Pipe, PipeTransform } from '@angular/core';

/**
 * Small pure pipes for values shown in many places, so each is formatted the same way
 * everywhere (and only recalculated when its input changes).
 */

/**
 * A link target for a stored URL; older entries may lack the scheme.
 *
 *   <a [href]="site.url | wsExternalUrl" target="_blank" rel="noopener">{{ site.url }}</a>
 */
@Pipe({ name: 'wsExternalUrl', standalone: true })
export class ExternalUrlPipe implements PipeTransform {
  transform(url: string | null | undefined): string {
    if (!url) {
      return '';
    }
    return /^https?:\/\//i.test(url) ? url : `https://${url}`;
  }
}

/**
 * A dialable `tel:` link from a number and an optional country calling code.
 *
 *   <a [href]="phone.phone_number | wsTelHref: phone.country?.prefix">…</a>
 */
@Pipe({ name: 'wsTelHref', standalone: true })
export class TelHrefPipe implements PipeTransform {
  transform(number: string | null | undefined, prefix?: string | number | null): string {
    if (!number) {
      return '';
    }
    return `tel:${prefix ? '+' + prefix : ''}${number.replace(/[^\d+]/g, '')}`;
  }
}

/**
 * A phone number as shown: "+prefix number", or just the number without a prefix.
 *
 *   {{ phone.phone_number | wsPhoneDisplay: phone.country?.prefix }}
 */
@Pipe({ name: 'wsPhoneDisplay', standalone: true })
export class PhoneDisplayPipe implements PipeTransform {
  transform(number: string | null | undefined, prefix?: string | number | null): string {
    if (!number) {
      return '';
    }
    return prefix ? `+${prefix} ${number}` : number;
  }
}

/**
 * A `mailto:` link for an email address.
 *
 *   <a [href]="contact.email | wsMailto">{{ contact.email }}</a>
 */
@Pipe({ name: 'wsMailto', standalone: true })
export class MailtoPipe implements PipeTransform {
  transform(email: string | null | undefined): string {
    return email ? `mailto:${email}` : '';
  }
}

/** A person as the WorldSkills APIs return them. */
export interface PersonNameParts {
  first_name?: string | null;
  last_name?: string | null;
}

/** "First Last", skipping a missing part. */
export function personName(person: PersonNameParts | null | undefined): string {
  return person ? [person.first_name, person.last_name].filter(Boolean).join(' ') : '';
}

/**
 * Template form of `personName()`.
 *
 *   {{ contact | wsPersonName }}
 */
@Pipe({ name: 'wsPersonName', standalone: true })
export class PersonNamePipe implements PipeTransform {
  transform(person: PersonNameParts | null | undefined): string {
    return personName(person);
  }
}
