import classes from "./SearchBar.module.css";
import { useRef, useContext, Fragment, useEffect } from "react";
import { CountryContext } from "../../store/country-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

let timeout;

const SearchBar = () => {
  const countryCtx = useContext(CountryContext);

  const countryInputHandler = (event) => {
    document.getElementById("filter-bar").textContent = "Filter by Region";

    const enteredCountry = event.target.value;
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      const matchedCountries = countryCtx.totalCountries.filter((country) =>
        country.name.toLowerCase().startsWith(enteredCountry.toLowerCase())
      );
      countryCtx.setCurrentCountries(matchedCountries);
    }, 500);
  };

  return (
    <Fragment>
      <FontAwesomeIcon className={classes.icon} icon={faMagnifyingGlass} />
      <input
        onChange={countryInputHandler}
        className={classes.search}
        placeholder="Search for a country..."
      />
    </Fragment>
  );
};

export default SearchBar;
