import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: '#C026D4'
    },
    secondary: {
      main: '#fff'
    },
    // text: {
    //   main: '#685F78'
    // },
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
  //     'Roboto',
  //     'Noto Serif Bengali',
  //   ].join(','),
  //   h4: {
  //     fontSize: '30px',
  //     fontWeight: 600,
  //     lineHeight: 1.3,
  //   },
  //   h5: {
  //     fontSize: '25px',
  //     fontWeight: 600,
  //     lineHeight: 1.3,
  //   },
  //   body: {
  //     color: '#475467'
  //   }
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