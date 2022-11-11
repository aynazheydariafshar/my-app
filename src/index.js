import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MuiThemeProvider from "MuiThemeProvider";

import App from "./App";
import "assets/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MuiThemeProvider>
        <App />
    </MuiThemeProvider>
  </BrowserRouter>
);
