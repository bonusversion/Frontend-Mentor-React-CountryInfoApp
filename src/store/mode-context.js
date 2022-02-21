import React, { useState } from "react";

export const ModeContext = React.createContext({
  mode: false,
  pageStatus: "",
  toggleMode: () => {},
  setPageStatus: () => {},
});

export default (props) => {
  const [mode, setMode] = useState(false);
  const [pageStatus, setPageStatus] = useState("pend");

  const modeHandler = () => {
    setMode((prevMode) => !prevMode);
  };
  const pageStatusHandler = (status) => {
    setPageStatus(status);
  };

  const contextProvider = {
    mode: mode,
    pageStatus: pageStatus,
    toggleMode: modeHandler,
    setPageStatus: pageStatusHandler,
  };

  return (
    <ModeContext.Provider value={contextProvider}>
      {props.children}
    </ModeContext.Provider>
  );
};
