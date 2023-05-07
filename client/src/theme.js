import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: "Inter"
  },
  palette: {
    primary: {
      main: "#FFC72C"
    },
    secondary: {
      main: "#FFC72C"
    },
    info: {
      main: "#082567"
    },
    background: {
      default: "#ffd700"
    }
  },

  components: {
    MuiInputBase: {
      styleOverrides: {
        input: {
          "&::placeholder": {
            fontFamily: "Inter",
            fontStyle: "italic",
            fontSize: "0.85rem"
          }
        }
      }
    }
  }
});
