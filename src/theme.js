import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#C026D4'
    },
    secondary: {
      main: '#fff'
    },

  },
  mixins: {
    MuiDataGrid: {
      containerBackground: '#fbf8ff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          textTransform: 'none',
          ":hover": {
            boxShadow: 'none'
          }
        }
      }
    }
  },

  // typography: {
  //   fontFamily: [
  //     'Noto Serif Bengali',
  //     'Roboto',
  //   ].join(','),
  // },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
  }
})