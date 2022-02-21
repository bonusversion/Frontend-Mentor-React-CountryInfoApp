import classes from "./MainHeader.module.css";
import { Fragment, useContext } from "react";
import { ModeContext } from "../../store/mode-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const MainHeader = (props) => {
  const { mode, toggleMode } = useContext(ModeContext);

  const headerStyle = mode ? classes["header-night"] : classes["header-day"];

  return (
    <Fragment>
      <header className={headerStyle}>
        <h1
          className={classes.title}
          style={{ color: mode ? "hsl(0, 0%, 100%)" : "hsl(207, 26%, 17%)" }}
        >
          Where in the world?
        </h1>
        <button
          onClick={toggleMode}
          style={{ color: mode ? "hsl(0, 0%, 98%)" : "hsl(209, 23%, 22%)" }}
        >
          {mode ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faLightbulb} />
          )}
          <span>&nbsp;</span>
          {mode ? "Dark" : "Day"} Mode
        </button>
      </header>
    </Fragment>
  );
};

export default MainHeader;
