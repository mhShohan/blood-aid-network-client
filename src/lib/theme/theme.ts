import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1A374D",
      light: "#CDE8E5",
    },
    secondary: {
      main: "#68868C",
      light: "#BBE1FA"
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        variant: "contained"
      },
      styleOverrides: {
        root: {
          padding: '.5rem 3rem'
        }
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg"
      }
    },
  },
  typography: {
    body1: {
      color: '#0B1134CC',
      margin: 0
    }
  }
})

theme.shadows[1] = '0 5px 22px lightgray'

export default theme