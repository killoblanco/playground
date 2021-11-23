import { alpha, createTheme, responsiveFontSizes } from '@mui/material';
import { teal } from '@mui/material/colors';

export const theme = responsiveFontSizes(createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderBottom: `4px solid ${teal.A400}`,
          backgroundColor: alpha('#121212', 0.48),
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        outlined: {
          borderColor: teal.A700,
        },
      },
    },
  },
  palette: {
    mode: 'dark',
    primary: {
      light: teal.A200,
      main: teal.A400,
      dark: teal.A700,
    },
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
}));
