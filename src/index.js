import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ModeContextProvider from "./store/mode-context";
import CountryContextProvider from "./store/country-context";

ReactDOM.render(
  <React.StrictMode>
    <CountryContextProvider>
      <ModeContextProvider>
        <App />
      </ModeContextProvider>
    </CountryContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
