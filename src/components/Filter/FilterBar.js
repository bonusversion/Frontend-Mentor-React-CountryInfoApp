import classes from "./FilterBar.module.css";
import { useContext, useRef } from "react";
import { CountryContext } from "../../store/country-context";

const FilterBar = () => {
  const { regions, totalCountries, setCurrentCountries } =
    useContext(CountryContext);
  const regionSelectRef = useRef();

  const regionChangeHandler = () => {
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
    <select
      onChange={regionChangeHandler}
      ref={regionSelectRef}
      className={classes.select}
      defaultValue="1"
    >
      <option value="1" disabled style={{ display: "none" }}>
        Filter by Region
      </option>
      <option>All</option>
      {regions.map((region) => (
        <option key={region}>{region}</option>
      ))}
    </select>
  );
};

export default FilterBar;
