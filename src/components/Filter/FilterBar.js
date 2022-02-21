import classes from "./FilterBar.module.css";
import { Fragment, useContext, useRef, useState } from "react";
import { CountryContext } from "../../store/country-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { ModeContext } from "../../store/mode-context";

const FilterBar = () => {
  const { regions, totalCountries, setCurrentCountries } =
    useContext(CountryContext);
  const mode = useContext(ModeContext).mode;
  const regionSelectRef = useRef();
  const [isHidden, setIsHidden] = useState(true);
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

  const regionChangeHandler = () => {
    document.getElementsByTagName("input")[0].value = "";

    const enteredRegion = regionSelectRef.current.value;

    if (enteredRegion === "All") {
      setCurrentCountries(totalCountries);
      return;
    }
    const filteredCountries = totalCountries.filter(
      (country) => country.region === enteredRegion
    );

    setCurrentCountries(filteredCountries);
  };

  const mouseOverHandler = () => {
    setIsHidden(false);
  };
  const mouseLeaveHandler = () => {
    setIsHidden(true);
  };

  const selectHandler = (event) => {
    const enteredRegion = event.target.textContent;
    setSelectedRegion(enteredRegion);
    if (enteredRegion === "All") {
      setCurrentCountries(totalCountries);
      return;
    }
    const filteredCountries = totalCountries.filter(
      (country) => country.region === enteredRegion
    );

    setCurrentCountries(filteredCountries);
  };

  const filterBaseStyle = mode
    ? classes["filter-night"]
    : classes["filter-day"];

  return (
    <Fragment>
      <div
        className={classes.filter}
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <p id="filter-bar" className={filterBaseStyle}>
          {selectedRegion}
        </p>
        <ul className={isHidden ? classes.hidden : null}>
          {regions.map((region) => (
            <li key={region} onClick={selectHandler}>
              {region}
            </li>
          ))}
        </ul>
      </div>
      <FontAwesomeIcon icon={faAngleDown} className={classes.icon} />
    </Fragment>
  );
};

export default FilterBar;
