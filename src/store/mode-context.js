import React, { useState } from "react";

export const ModeContext = React.createContext({
  mode: false,
  toggleMode: () => {},
});

export default (props) => {
  const [mode, setMode] = useState(false);

  const modeHandler = () => {
    setMode((prevMode) => !prevMode);
  };

  const contextProvider = {
    mode: mode,
    toggleMode: modeHandler,
  };

  return (
    <ModeContext.Provider value={contextProvider}>
      {props.children}
    </ModeContext.Provider>
  );
};
