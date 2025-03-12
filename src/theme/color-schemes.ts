import type {
  ColorSystemOptions,
  DefaultColorScheme,
  ExtendedColorScheme,
} from '@mui/material/styles/createThemeWithVars';

export const colorSchemes = {
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
} satisfies Partial<Record<DefaultColorScheme, boolean | ColorSystemOptions>> &
  (ExtendedColorScheme extends string ? Record<ExtendedColorScheme, ColorSystemOptions> : object);
