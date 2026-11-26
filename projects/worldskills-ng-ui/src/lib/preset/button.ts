export const button = {
  root: {
    borderRadius: '0.1rem',
    paddingY: '0.675rem',
    paddingX: '0.975rem',
    label: {
      fontWeight: 'bold',
    },

    lg: {
      paddingY: '1.2rem',
      paddingX: '0.975rem',
    },

    sm: {
      paddingY: '0.375rem',
      paddingX: '0.375rem',
    },
  },

  colorScheme: {
    light: {
      root: {
        primary: {
          background: '{ws-pink.500}',
          hoverBackground: '{ws-pink.600}',
          activeBackground: '{ws-pink.700}',
          borderColor: '{ws-pink.500}',
          hoverBorderColor: '{ws-pink.600}',
          activeBorderColor: '{ws-pink.700}',
          color: '#ffffff',
          hoverColor: '#ffffff',
          activeColor: '#ffffff',
          focusRing: {
            color: '{ws-pink.500}',
            shadow: 'none',
          },
        },
      },
    },
    dark: {
      root: {
        primary: {
          background: '{ws-pink.500}',
          hoverBackground: '{ws-pink.600}',
          activeBackground: '{ws-pink.700}',
          borderColor: '{ws-pink.500}',
          hoverBorderColor: '{ws-pink.600}',
          activeBorderColor: '{ws-pink.700}',
          color: '#ffffff',
          hoverColor: '#ffffff',
          activeColor: '#ffffff',
          focusRing: {
            color: '{ws-pink.500}',
            shadow: 'none',
          },
        },
      },
    },
  },

  css: () => `
    i {
      line-height: 12px !important;
    }
  `,
};
