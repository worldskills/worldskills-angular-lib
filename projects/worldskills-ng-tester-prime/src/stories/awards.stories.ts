import { Meta, StoryObj, moduleMetadata, applicationConfig } from '@storybook/angular';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { ConfirmationService, MessageService } from 'primeng/api';
import {
  RecipientAwardListComponent,
  PersonAward,
  RecipientAwardCertificateType,
  provideWsNgUi,
} from '@worldskills/ng-ui';
import { provideWsNgUiTranslations } from '@worldskills/ng-ui';

const MOCK_AWARD_WSI = {
  id: 1,
  name: { lang_code: 'en', text: 'WorldSkills Excellence Award' },
  description: { lang_code: 'en', text: 'Awarded for outstanding performance.' },
  entity: { id: 1, name: { lang_code: 'en', text: 'WorldSkills International' } },
  has_certificate: true,
  sort: 1,
};

const MOCK_AWARD_MEMBER = {
  id: 2,
  name: { lang_code: 'en', text: 'Outstanding Contribution Award' },
  description: { lang_code: 'en', text: 'Awarded for outstanding member contribution.' },
  entity: { id: 2, name: { lang_code: 'en', text: 'WorldSkills Australia' } },
  has_certificate: false,
  sort: 2,
};

const MOCK_AWARD_SPECIAL = {
  id: 3,
  name: { lang_code: 'en', text: 'President\'s Award' },
  description: { lang_code: 'en', text: 'Special presidential recognition.' },
  entity: { id: 1, name: { lang_code: 'en', text: 'WorldSkills International' } },
  has_certificate: true,
  sort: 3,
};

const MOCK_PERSON_AWARDS: PersonAward[] = [
  {
    id: 101,
    person_id: 1001,
    award: MOCK_AWARD_WSI,
    presented_at: 2023,
    extra_information: 'Internal notes about the award.',
    public_extra_information: 'Recognised for exceptional leadership.',
    last_updated: '2023-10-15T09:30:00Z',
    certificates: [],
  },
  {
    id: 102,
    person_id: 1001,
    award: MOCK_AWARD_MEMBER,
    presented_at: 2022,
    extra_information: '',
    public_extra_information: 'Awarded at annual gala.',
    last_updated: '2022-11-20T14:00:00Z',
    certificates: [],
  },
  {
    id: 103,
    person_id: 1001,
    award: MOCK_AWARD_SPECIAL,
    presented_at: 2024,
    extra_information: 'Presented by the President at the World Championships.',
    public_extra_information: 'Special recognition for global service.',
    last_updated: '2024-03-01T08:00:00Z',
    certificates: [
      {
        id: 1,
        certificate_unique_id: 'abc-123-def-456',
        certificate_dropbox_path: '/Certificates/2024/special.pdf',
        certificate_type: RecipientAwardCertificateType.DIGITAL,
      },
    ],
  },
];

const SHARED_DECORATORS = [
  applicationConfig({
    providers: [
      provideAnimations(),
      provideHttpClient(),
      provideWsNgUi({ api: { apiEndpoint: 'https://api.worldskills.org', appCode: [] } }),
      provideWsNgUiTranslations(),
      ConfirmationService,
      MessageService,
    ],
  }),
  moduleMetadata({ imports: [RecipientAwardListComponent] }),
];

const meta: Meta<RecipientAwardListComponent> = {
  title: 'WorldSkills UI / Awards / Recipient Award List',
  component: RecipientAwardListComponent,
  tags: ['autodocs'],
  decorators: SHARED_DECORATORS,
  parameters: {
    docs: {
      description: {
        component: `
Displays a list of recipient awards with optional create, edit, and delete actions.
Uses PrimeNG Table for the list and PrimeNG Dialog for the create/edit form.
Requires \`ConfirmationService\` and \`MessageService\` in providers (for confirm dialogs and toasts).

\`\`\`html
<ws-ng-ui-recipient-award-list
  [recipientAwards]="awards"
  [canCreate]="true"
  [canUpdate]="true"
  [canDelete]="true"
  [certificateEnabled]="true"
  (create)="onCreate($event)"
  (update)="onUpdate($event)"
  (delete)="onDelete($event)"
/>
\`\`\`
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<RecipientAwardListComponent>;

export const EmptyList: Story = {
  name: 'Empty list',
  args: {
    recipientAwards: [],
    canCreate: true,
    canUpdate: false,
    canDelete: false,
    certificateEnabled: false,
  },
};

export const WithAwards: Story = {
  name: 'With awards (full CRUD)',
  args: {
    recipientAwards: MOCK_PERSON_AWARDS,
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    certificateEnabled: false,
  },
};

export const ReadOnly: Story = {
  name: 'Read-only (no actions)',
  args: {
    recipientAwards: MOCK_PERSON_AWARDS,
    canCreate: false,
    canUpdate: false,
    canDelete: false,
    certificateEnabled: false,
  },
};

export const WithCertificates: Story = {
  name: 'With certificates enabled',
  args: {
    recipientAwards: MOCK_PERSON_AWARDS,
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    certificateEnabled: true,
  },
};
