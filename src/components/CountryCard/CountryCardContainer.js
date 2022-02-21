import { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import classes from "./CountryCardContainer.module.css";
import { CountryContext } from "../../store/country-context";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { ModeContext, modeContext } from "../../store/mode-context";

const CountryCardContainer = () => {
  const { pageStatus } = useContext(ModeContext);

  const currentCountries = useContext(CountryContext).currentCountries;

  if (pageStatus === "pend") {
    return <LoadingSpinner />;
  }

  const content = currentCountries.map((country) => (
    <li key={country.alpha2Code} className="shadowbox">
      <Link to={`/countries/${country.alpha2Code}`} className="link">
        <CountryCard
          flag={country.flag}
          name={country.name}
          population={country.population}
          region={country.region}
          capital={country.capital}
        ></CountryCard>
      </Link>
    </li>
  ));
  return (
    <Fragment>
      <ul className={classes["card-box"]}>{content}</ul>
    </Fragment>
  );
};

export default CountryCardContainer;
