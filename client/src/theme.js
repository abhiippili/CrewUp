import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FFC72C"
    },
    secondary: {
      main: "#FFC72C"
    },
    info: {
      main: "#fff"
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
