import { createTheme, responsiveFontSizes } from '@mui/material';
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
  },
  palette: {
    mode: 'dark',
    primary: {
      light: teal.A200,
      main: teal.A400,
      dark: teal.A700,
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: ['Lato', 'sans-serif'].join(','),
  },
}));
