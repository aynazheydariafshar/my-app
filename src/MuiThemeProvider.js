import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const MuiThemeProvider = ({ children }) => {
  const muiTheme = createTheme({
    components: {
      // MuiSvgIcon: {
      //   defaultProps: {
      //     style: {
      //       transform: "scaleX(-1)",
      //     },
      //   },
      // },
      MuiButton: {
        defaultProps: {
          style: {
            backgroundColor: "red",
            color: "#fff",
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
      // MuiCircularProgress: {
      //   defaultProps: {
      //     style: {
      //       color: "white",
      //     },
      //   },
      // },
      // MuiMenuItem: {
      //   defaultProps: {
      //     dir: isRtl ? "rtl" : "ltr",
      //   },
      // },
      // MuiLink: {
      //   defaultProps: {
      //     dir: isRtl ? "rtl" : "ltr",
      //     sx: {
      //       "&:hover": {
      //         color: palette.secondary.main,
      //       },
      //     },
      //     style: {
      //       cursor: "pointer",
      //       userSelect: "none",
      //       textDecoration: "none",
      //     },
      //   },
      // },
      // MuiTypography: {
      //   defaultProps: {
      //     textAlign: isRtl ? "right"
      //     style: {
      //       textAlign: isRtl ? "right" : "left",
      //     },
      //   },
      // },
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
          // InputLabelProps : {
          //   style:{textAlign: "right"}
          // },
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
