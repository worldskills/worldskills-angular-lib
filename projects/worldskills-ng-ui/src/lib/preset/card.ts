export const card = {
  title: {
    fontWeight: '600',
  },
  css: ({ dt }: { dt: any }) => `
    .p-card {
      border-color: ${dt('gray.200')};
    }
  `,
};
