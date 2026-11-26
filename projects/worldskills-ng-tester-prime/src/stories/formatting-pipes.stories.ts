import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import {
  ExternalUrlPipe,
  MailtoPipe,
  PersonNamePipe,
  PhoneDisplayPipe,
  TelHrefPipe,
} from '@worldskills/ng-ui';

const meta: Meta = {
  title: 'WorldSkills UI / Formatting Pipes',
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({ imports: [ExternalUrlPipe, MailtoPipe, PersonNamePipe, PhoneDisplayPipe, TelHrefPipe] }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
Small pure pipes for contact details, so they look and link the same in every app.

| Pipe | Example | Result |
|------|---------|--------|
| \`wsExternalUrl\` | \`'worldskills.org' \\| wsExternalUrl\` | \`https://worldskills.org\` (adds a missing scheme) |
| \`wsTelHref\` | \`phone.phone_number \\| wsTelHref: phone.country?.prefix\` | \`tel:+358401234567\` |
| \`wsPhoneDisplay\` | \`phone.phone_number \\| wsPhoneDisplay: phone.country?.prefix\` | \`+358 40 123 4567\` |
| \`wsMailto\` | \`contact.email \\| wsMailto\` | \`mailto:jane@example.org\` |
| \`wsPersonName\` | \`contact \\| wsPersonName\` | \`Jane Doe\` (skips a missing part) |

\`personName(person)\` is the same as a function, for use in code.
        `,
      },
    },
  },
};

export default meta;

export const ContactDetails: StoryObj = {
  name: 'Contact details',
  render: () => ({
    props: {
      contact: { first_name: 'Jane', last_name: 'Doe', email: 'jane@example.org' },
      phone: { phone_number: '40 123 4567', country: { prefix: 358 } },
      site: 'worldskills.org',
    },
    template: `
      <dl class="grid grid-cols-[auto_1fr] gap-x-6 gap-y-2">
        <dt class="font-medium">Name</dt>
        <dd>{{ contact | wsPersonName }}</dd>
        <dt class="font-medium">Email</dt>
        <dd><a class="text-primary hover:underline" [href]="contact.email | wsMailto">{{ contact.email }}</a></dd>
        <dt class="font-medium">Phone</dt>
        <dd>
          <a class="text-primary hover:underline" [href]="phone.phone_number | wsTelHref: phone.country.prefix">
            {{ phone.phone_number | wsPhoneDisplay: phone.country.prefix }}
          </a>
        </dd>
        <dt class="font-medium">Website</dt>
        <dd><a class="text-primary hover:underline" [href]="site | wsExternalUrl" target="_blank" rel="noopener">{{ site }}</a></dd>
      </dl>
    `,
  }),
};
