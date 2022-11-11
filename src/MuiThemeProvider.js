import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const MuiThemeProvider = ({ children }) => {
  const muiTheme = createTheme({
    components: {
      MuiButton: {
        defaultProps: {
          style: {
            backgroundColor: "rgb(214, 220, 227)",
            color: "black",
            margin : "10px 0"
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            left: "inherit",
            right: "1.75rem",
            transformOrigin: "right",
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            textAlign: "right",
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          size: "small",
          dir: "rtl",
          style: {
            textAlign: "right",
            margin: "10px 0",
            borderRadius: "20px",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={muiTheme}>
      <div>{children}</div>
    </ThemeProvider>
  );
};

export default MuiThemeProvider;
