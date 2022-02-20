import classes from "./SearchBar.module.css";
import { useRef, useContext } from "react";
import { CountryContext } from "../../store/country-context";

const SearchBar = () => {
  const countryCtx = useContext(CountryContext);
  const countryInputHandler = (event) => {
    const enteredCountry = event.target.value;
    const matchedCountries = countryCtx.totalCountries.filter((country) =>
      country.name.toLowerCase().startsWith(enteredCountry.toLowerCase())
    );
    countryCtx.setCurrentCountries(matchedCountries);
  };

  return (
    <input
      onChange={countryInputHandler}
      className={classes.search}
      placeholder="Search for a country..."
    />
  );
};

export default SearchBar;
