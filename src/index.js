import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ModeContextProvider from "./store/mode-context";
import CountryContextProvider from "./store/country-context";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CountryContextProvider>
        <ModeContextProvider>
          <App />
        </ModeContextProvider>
      </CountryContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
