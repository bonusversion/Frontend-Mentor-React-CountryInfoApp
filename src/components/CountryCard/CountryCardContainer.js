import { Fragment, useContext } from "react";
import CountryCard from "./CountryCard";
import classes from "./CountryCardContainer.module.css";
import { CountryContext } from "../../store/country-context";

const CountryCardContainer = () => {
  const currentCountries = useContext(CountryContext).currentCountries;

  const content = currentCountries.map((country) => (
    <li key={country.alpha2Code} className="shadowbox">
      <CountryCard
        flag={country.flag}
        name={country.name}
        population={country.population}
        region={country.region}
        capital={country.capital}
      ></CountryCard>
    </li>
  ));
  return (
    <Fragment>
      <ul className={classes["card-box"]}>{content}</ul>
    </Fragment>
  );
};

export default CountryCardContainer;
