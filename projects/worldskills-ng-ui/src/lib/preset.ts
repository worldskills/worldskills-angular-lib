import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { GlobalPassThrough } from 'primeng/config';

export const WorldSkillsPTPreset: GlobalPassThrough = {
  table: {
    tableContainer: {
      style: {
        borderRadius: '0.2rem',
      },
    },
    root: {
      // Force table to use 100% of width
      style: {
        width: '100%',
      },
    },
  },
  inputText: {
    root: {
      // Force input to use 100% of width
      style: {
        width: '100%',
      },
    },
  },
  tooltip: {
    root: {
      style: {
        fontSize: '0.8rem',
      },
    },
  },
  card: {
    root: {
      style: {
        borderWidth: '1px',
        borderStyle: 'solid',
        boxShadow: 'none',
        borderRadius: '0.2rem',
      },
    },
  },
  menu: {
    root: {
      style: {
        borderRadius: '0.2rem',
        fontSize: '0.8rem',
      },
    },
    itemLink: {
      style: {
        textDecoration: 'none',
      },
    },
    separator: {
      style: {
        padding: '0.2rem',
        marginTop: '0.2rem',
      },
    },
  },
  button: {
    root: {
      style: {
        lineHeight: '12px',
      },
    },
  },
};

export const WorldSkillsPreset = definePreset(Aura, {
  components: {
    datatable: {
      bodyCell: {
        padding: '0.7rem 1rem',
      },
      headerCell: {
        hoverBackground: 'transparent',
        selectedBackground: 'transparent',
      },
    },
    treetable: {
      bodyCell: {
        padding: '0.7rem 1rem',
      },
    },
    button: {
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

      css: () => `
        i {
          line-height: 12px !important;
        }
      `,
    },
    card: {
      title: {
        fontWeight: '600',
      },
      css: ({ dt }) => `
        .p-card {
          border-color: ${dt('gray.200')};
        }
      `,
    },
    message: {
      root: {
        borderRadius: '0.2rem',
      },
    },
    fieldset: {
      root: {
        borderRadius: '0.2rem',
      },
    },
    panel: {
      root: {
        borderRadius: '0.2rem',
      },
    },
    inputtext: {
      root: {
        paddingY: '0.375rem',
        borderRadius: '0.1rem',
      },
    },
    treeselect: {
      root: {
        paddingY: '0.375rem',
        borderRadius: '0.1rem',
      },
    },
    iftalabel: {
      input: {
        paddingTop: '1rem',
      },
    },
    select: {
      root: {
        paddingY: '0.375rem',
        borderRadius: '0.1rem',
      },
    },
    tooltip: {
      root: {
        padding: '0.2rem 0.6rem',
      },
    },
    tabs: {
      tabpanel: {
        padding: '1.5rem 0',
      },
    },
    confirmpopup: {
      root: {
        gutter: '0px',
      },
    },
  },
});