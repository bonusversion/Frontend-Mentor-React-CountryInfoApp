import classes from "./MainHeader.module.css";
import { Fragment, useContext } from "react";
import { ModeContext } from "../../store/mode-context";

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
          Dark Mode
        </button>
      </header>
    </Fragment>
  );
};

export default MainHeader;
