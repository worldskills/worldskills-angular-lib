export const card = {
  root: {
    background: '{gray.50}',
  },
  title: {
    fontWeight: '600',
  },
  css: ({ dt }: { dt: any }) => `
    .p-card {
      border-color: ${dt('gray.200')};
    }
  `,
};
