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
  primitive: {
    'ws-blue': {
      '50': '#F2F7F9',
      '100': '#E5F0F4',
      '200': '#CCE0E9',
      '300': '#A6C9D8',
      '400': '#66A3BC',
      '500': '#00658F',
      '600': '#005B81',
      '700': '#005172',
      '800': '#004764',
      '900': '#003D56',
      '950': '#002D40',
    },
    'ws-blue-dark': {
      '50': '#F2F5F7',
      '100': '#E5EBEF',
      '200': '#CCD7E0',
      '300': '#A6B9C9',
      '400': '#6687A2',
      '500': '#003764',
      '600': '#00325A',
      '700': '#002C50',
      '800': '#002746',
      '900': '#00213C',
      '950': '#00192D',
    },
    'ws-cyan': {
      '50': '#F2FCFE',
      '100': '#E5F8FC',
      '200': '#CCF1FA',
      '300': '#A6E7F6',
      '400': '#66D6F0',
      '500': '#00BBE6',
      '600': '#00A8CF',
      '700': '#0096B8',
      '800': '#0083A1',
      '900': '#00708A',
      '950': '#005468',
    },
    'ws-teal': {
      '50': '#F7FCFC',
      '100': '#EFF9F8',
      '200': '#DFF3F2',
      '300': '#C7EBE8',
      '400': '#9FDCD7',
      '500': '#5FC5BD',
      '600': '#56B1AA',
      '700': '#4C9E97',
      '800': '#438A84',
      '900': '#397671',
      '950': '#2B5955',
    },
    'ws-purple': {
      '50': '#F6F3F7',
      '100': '#EDE7F0',
      '200': '#DBCFE0',
      '300': '#C0AAC9',
      '400': '#926EA3',
      '500': '#4A0D66',
      '600': '#430C5C',
      '700': '#3B0A52',
      '800': '#340947',
      '900': '#2C083D',
      '950': '#21062E',
    },
    'ws-pink': {
      '50': '#CD6E9A',
      '100': '#E2AAC4',
      '200': '#EECFDD',
      '300': '#F7E7EE',
      '400': '#FBF3F7',
      '500': '#AC0D56',
      '600': '#9B0C4D',
      '700': '#8A0A45',
      '800': '#78093C',
      '900': '#670834',
      '950': '#4D0627',
    },
    'ws-orange': {
      '50': '#EE8D7B',
      '100': '#F5BCB2',
      '200': '#F9D9D3',
      '300': '#FCECE9',
      '400': '#FEF5F4',
      '500': '#E34123',
      '600': '#CC3B20',
      '700': '#B6341C',
      '800': '#9F2E19',
      '900': '#882715',
      '950': '#661D10',
    },
    'ws-yellow': {
      '50': '#ECDE7B',
      '100': '#F4ECB2',
      '200': '#F9F4D3',
      '300': '#FCF9E9',
      '400': '#FDFCF4',
      '500': '#DFC823',
      '600': '#C9B420',
      '700': '#B2A01C',
      '800': '#9C8C19',
      '900': '#867815',
      '950': '#645A10',
    },
    'ws-red': {
      '50': '#EA868F',
      '100': '#F3B8BE',
      '200': '#F8D7DA',
      '300': '#FBEBEC',
      '400': '#FDF5F6',
      '500': '#DC3545',
      '600': '#C6303E',
      '700': '#B02A37',
      '800': '#9A2530',
      '900': '#842029',
      '950': '#63181F',
    },
    'ws-green': {
      '50': '#7ECA8F',
      '100': '#B4E0BE',
      '200': '#D4EDDA',
      '300': '#E9F6EC',
      '400': '#F4FBF6',
      '500': '#28A745',
      '600': '#24963E',
      '700': '#208637',
      '800': '#1C7530',
      '900': '#186429',
      '950': '#124B1F',
    },
    'ws-gray': {
      '50': '#B7B7B7',
      '100': '#D5D5D5',
      '200': '#E7E7E7',
      '300': '#F3F3F3',
      '400': '#F9F9F9',
      '500': '#878787',
      '600': '#7A7A7A',
      '700': '#6C6C6C',
      '800': '#5F5F5F',
      '900': '#515151',
      '950': '#3D3D3D',
    },
  },
  semantic: {
    primary: {
      50: '{ws-blue.50}',
      100: '{ws-blue.100}',
      200: '{ws-blue.200}',
      300: '{ws-blue.300}',
      400: '{ws-blue.400}',
      500: '{ws-blue.500}',
      600: '{ws-blue.600}',
      700: '{ws-blue.700}',
      800: '{ws-blue.800}',
      900: '{ws-blue.900}',
      950: '{ws-blue.950}',
    },
    info: {
      50: '{ws-cyan.50}',
      100: '{ws-cyan.100}',
      200: '{ws-cyan.200}',
      300: '{ws-cyan.300}',
      400: '{ws-cyan.400}',
      500: '{ws-cyan.500}',
      600: '{ws-cyan.600}',
      700: '{ws-cyan.700}',
      800: '{ws-cyan.800}',
      900: '{ws-cyan.900}',
      950: '{ws-cyan.950}',
    },
    success: {
      50: '{ws-green.50}',
      100: '{ws-green.100}',
      200: '{ws-green.200}',
      300: '{ws-green.300}',
      400: '{ws-green.400}',
      500: '{ws-green.500}',
      600: '{ws-green.600}',
      700: '{ws-green.700}',
      800: '{ws-green.800}',
      900: '{ws-green.900}',
      950: '{ws-green.950}',
    },
    warn: {
      50: '{ws-yellow.50}',
      100: '{ws-yellow.100}',
      200: '{ws-yellow.200}',
      300: '{ws-yellow.300}',
      400: '{ws-yellow.400}',
      500: '{ws-yellow.500}',
      600: '{ws-yellow.600}',
      700: '{ws-yellow.700}',
      800: '{ws-yellow.800}',
      900: '{ws-yellow.900}',
      950: '{ws-yellow.950}',
    },
    danger: {
      50: '{ws-red.50}',
      100: '{ws-red.100}',
      200: '{ws-red.200}',
      300: '{ws-red.300}',
      400: '{ws-red.400}',
      500: '{ws-red.500}',
      600: '{ws-red.600}',
      700: '{ws-red.700}',
      800: '{ws-red.800}',
      900: '{ws-red.900}',
      950: '{ws-red.950}',
    },
    colorScheme: {
      light: {
        formField: {
          invalidBorderColor: '{ws-red.400}',
          invalidPlaceholderColor: '{ws-red.600}',
        },
      },
    },
  },
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