import classes from "./SearchBar.module.css";
import { useRef, useContext, Fragment } from "react";
import { CountryContext } from "../../store/country-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const countryCtx = useContext(CountryContext);
  const countryInputHandler = (event) => {
    document.getElementsByTagName("select")[0].value = "default";

    const enteredCountry = event.target.value;
    const matchedCountries = countryCtx.totalCountries.filter((country) =>
      country.name.toLowerCase().startsWith(enteredCountry.toLowerCase())
    );
    countryCtx.setCurrentCountries(matchedCountries);
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
