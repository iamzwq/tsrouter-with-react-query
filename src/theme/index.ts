import { createTheme } from '@mui/material/styles';
import { MuiButton } from './components/button/button';
import { MuiIconButton } from './components/button/icon-button';
import { MuiTextField } from './components/input/text-field';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    '2xl': true;
  }
}

export const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
    cssVarPrefix: '',
  },
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#00A76F',
          light: '#5BE49B',
          dark: '#007867',
        },
        secondary: {
          main: '#8E33FF',
          light: '#5119B7',
          dark: '#5119B7',
        },
        text: {
          primary: '#1C252E',
          secondary: '#637381',
          disabled: '#919EAB',
        },
        background: {
          default: '#fff',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#00A76F',
          light: '#5BE49B',
          dark: '#007867',
        },
        secondary: {
          main: '#8E33FF',
          light: '#5119B7',
          dark: '#5119B7',
        },
        background: {
          default: '#121212',
        },
      },
    },
  },
  typography: {
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiButton,
    MuiIconButton,
    MuiTextField,
    MuiInputLabel: {
      defaultProps: {
        shrink: true,
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        notched: true,
      },
    },
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
  },
});
