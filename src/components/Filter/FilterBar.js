import classes from "./FilterBar.module.css";
import { Fragment, useContext, useRef } from "react";
import { CountryContext } from "../../store/country-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const FilterBar = () => {
  const { regions, totalCountries, setCurrentCountries } =
    useContext(CountryContext);
  const regionSelectRef = useRef();

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

  return (
    <Fragment>
      <select
        onChange={regionChangeHandler}
        ref={regionSelectRef}
        className={classes.select}
        defaultValue="default"
      >
        <option value="default" disabled style={{ display: "none" }}>
          Filter by Region
        </option>
        <option>All</option>
        {regions.map((region) => (
          <option key={region}>{region}</option>
        ))}
      </select>
      <FontAwesomeIcon icon={faAngleDown} className={classes.icon} />
    </Fragment>
  );
};

export default FilterBar;
