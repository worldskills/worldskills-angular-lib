import { Meta, StoryObj, moduleMetadata, applicationConfig } from '@storybook/angular';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import {
  ResourceThumbnailContainerComponent,
  ResourceThumbnail,
  provideWsNgUi,
} from '@worldskills/ng-ui';

const SAMPLE_RESOURCES: ResourceThumbnail[] = [
  {
    resource_id: 1,
    filename: 'project-brief.pdf',
    thumbnailLink: 'https://placehold.co/160x160/e2e8f0/64748b?text=PDF',
    fileSize: 2_457_600,
    downloadLink: '#',
    description: 'Project brief document',
  },
  {
    resource_id: 2,
    filename: 'hero-photo.jpg',
    thumbnailLink: 'https://placehold.co/160x160/dbeafe/3b82f6?text=JPG',
    fileSize: 845_000,
    downloadLink: '#',
  },
  {
    resource_id: 3,
    filename: 'results.xlsx',
    thumbnailLink: 'https://placehold.co/160x160/dcfce7/16a34a?text=XLS',
    fileSize: '312 KB',
    downloadLink: '#',
  },
  {
    resource_id: 4,
    filename: 'presentation.pptx',
    thumbnailLink: 'https://placehold.co/160x160/fef3c7/d97706?text=PPT',
    fileSize: 5_200_000,
  },
  {
    resource_id: 5,
    filename: 'archive.zip',
    thumbnailLink: 'https://placehold.co/160x160/f3e8ff/9333ea?text=ZIP',
    fileSize: 18_900_000,
    downloadLink: '#',
  },
  {
    resource_id: 6,
    filename: 'demo-video.mp4',
    thumbnailLink: 'https://placehold.co/160x160/ffe4e6/e11d48?text=MP4',
    fileSize: 102_400_000,
    downloadLink: '#',
  },
];

const meta: Meta<ResourceThumbnailContainerComponent> = {
  title: 'WorldSkills UI / Resources / Thumbnail Container',
  component: ResourceThumbnailContainerComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [
        provideAnimations(),
        provideHttpClient(),
        provideWsNgUi({
          api: { apiEndpoint: 'https://api.worldskills.org', appCode: [] },
          http: { includeAuthToken: true },
        }),
        MessageService,
      ],
    }),
    moduleMetadata({ imports: [ResourceThumbnailContainerComponent] }),
  ],
  parameters: {
    docs: {
      description: {
        component: `
Displays a responsive grid of file thumbnails with an optional "Download all as ZIP" action.

### Setup

Requires \`provideWsNgUi({ api: { apiEndpoint: '...' } })\` and \`provideHttpClient()\`.
For authenticated endpoints, enable \`http.includeAuthToken: true\` — the interceptor reads
\`sessionStorage.getItem('access_token')\` automatically.

\`\`\`ts
// app.config.ts
provideWsNgUi({
  api: { apiEndpoint: 'https://api.worldskills.org', appCode: [16] },
  http: { includeAuthToken: true },
}),
provideHttpClient(withInterceptors([wsHttpInterceptor])),
\`\`\`

### Usage

\`\`\`html
<ws-ng-ui-resource-thumbnail-container
  title="Competition Resources"
  [resources]="thumbnails"
/>
\`\`\`

Convert a \`Resource[]\` from the API to \`ResourceThumbnail[]\`:

\`\`\`ts
import { Resource, ResourceThumbnail } from '@worldskills/ng-ui';

function toThumbnail(r: Resource): ResourceThumbnail {
  const latest = r.versions.at(-1)?.translations.at(-1);
  return {
    resource_id: r.id,
    filename: latest?.filename ?? r.name.text,
    downloadLink: latest?.links.find(l => l.rel === 'download')?.href,
  };
}
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    title: { control: 'text' },
    resources: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<ResourceThumbnailContainerComponent>;

export const Default: Story = {
  name: 'Multiple resources',
  args: {
    title: 'Competition Resources',
    resources: SAMPLE_RESOURCES,
  },
};

export const NoDownloadLinks: Story = {
  name: 'No download links',
  args: {
    title: 'View-only resources',
    resources: SAMPLE_RESOURCES.map(r => ({ ...r, downloadLink: undefined })),
  },
};

export const Empty: Story = {
  name: 'Empty state',
  args: {
    title: 'Resources',
    resources: [],
  },
};

export const SingleFile: Story = {
  name: 'Single file',
  args: {
    title: 'Document',
    resources: [SAMPLE_RESOURCES[0]],
  },
};
