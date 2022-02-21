import { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import classes from "./CountryCardContainer.module.css";
import { CountryContext } from "../../store/country-context";
import useHttp from "../../hooks/use-http";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import { ModeContext, modeContext } from "../../store/mode-context";

const CountryCardContainer = () => {
  //   const { setRegions, setCurrentCountries, setTotalCountries } =
  //     useContext(CountryContext);

  const { pageStatus } = useContext(ModeContext);

  const currentCountries = useContext(CountryContext).currentCountries;
  //   const {
  //     sendRequest,
  //     status,
  //     data: totalCountryData,
  //     error,
  //   } = useHttp("https://restcountries.com/v2/all");

  //   useEffect(() => {
  //     sendRequest();
  //   }, []);

  //   useEffect(() => {
  //     if (status === "completed" && totalCountryData) {
  //       const regionData = [
  //         ...new Set(totalCountryData.map((country) => country.region)),
  //       ];
  //       setRegions(regionData);
  //       setCurrentCountries(totalCountryData);
  //       setTotalCountries(totalCountryData);
  //     }
  //   }, [status, totalCountryData]);

  //   if (status === "pend") {
  //     return <LoadingSpinner />;
  //   }

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
