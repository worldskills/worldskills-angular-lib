import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { WsImageLightboxComponent } from '@worldskills/ng-ui';

/** A simple flag drawn at a given size, so the story needs no external images. */
function flag(width: number, height: number): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">`
    + `<rect width="100%" height="100%" fill="#fff"/>`
    + `<rect x="${width * 0.28}" width="${width * 0.17}" height="100%" fill="#003580"/>`
    + `<rect y="${height * 0.41}" width="100%" height="${height * 0.18}" fill="#003580"/></svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

const meta: Meta<WsImageLightboxComponent> = {
  title: 'WorldSkills UI / Image Lightbox',
  component: WsImageLightboxComponent,
  tags: ['autodocs'],
  decorators: [moduleMetadata({ imports: [WsImageLightboxComponent] })],
  argTypes: {
    alt: { control: 'text' },
    imgClass: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    flag: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: `
An image (logo, flag, photo) that opens large in a lightbox, on a checkerboard so white edges show,
with its size and ratio. The size comes from \`width\` / \`height\` when known, otherwise from the image.

With \`flag\`, it also compares the image with the nearest standard flag proportion
(1:1, 4:3, 3:2, 5:3, 2:1…) and points out flags more than 1% off — handy for checking uploads.

\`\`\`html
<ws-ng-ui-image-lightbox [src]="member.flag.thumbnail" alt="Flag of Finland" imgClass="h-12" [flag]="true" />
\`\`\`
        `,
      },
    },
  },
  render: (args) => ({
    props: args,
    template: `
      <ws-ng-ui-image-lightbox [src]="src" [alt]="alt" [imgClass]="imgClass" [width]="width" [height]="height" [flag]="flag" />
      <p class="mt-2 text-sm text-gray-500">Click the image.</p>
    `,
  }),
};

export default meta;
type Story = StoryObj<WsImageLightboxComponent>;

export const NearFlag: Story = {
  name: 'Flag close to a standard proportion (within 1% of 8:5)',
  args: { src: flag(400, 251), alt: 'Flag close to 8:5', imgClass: 'h-12', flag: true },
};

export const ExactFlag: Story = {
  name: 'Flag exactly 3:2',
  args: { src: flag(480, 320), alt: 'Flag (3:2)', imgClass: 'h-12', flag: true },
};

export const OffFlag: Story = {
  name: 'Flag off its proportion',
  args: { src: flag(500, 320), alt: 'Flag with a wrong size', imgClass: 'h-12', flag: true },
};

export const Logo: Story = {
  name: 'Logo (no flag check)',
  args: { src: flag(400, 400), alt: 'Organization logo', imgClass: 'h-16 w-16 object-contain', flag: false },
};
