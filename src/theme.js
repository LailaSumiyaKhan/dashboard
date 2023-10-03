import { createTheme } from "@mui/material";

export const theme = createTheme({
   typography: {
      fontFamily: 'Nunito, sans-serif',
   },
   palette: {
      lightBlue: {
         main: "#03a9f4",
         light: "#b3e5fc",
         dark: "#01579b"
      },
      blue: {
         main: "#2196f3",
         light: "#64b5f6",
         dark: "#1565c0"
      },
      cyan: {
         main: "#00bcd4",
         light: "#80deea",
         dark: "#0097a7",
      },
      red: {
         main: "#990011",
      }
   }
});

