import { Fragment, useContext, useEffect } from "react";
import { CountryContext } from "../../store/country-context";
import { ModeContext } from "../../store/mode-context";
import useHttp from "../../hooks/use-http";

import classes from "./BorderCountries.module.css";

const BorderCountries = (props) => {
  const mode = useContext(ModeContext).mode;
  let totalCountries;

  const {
    sendRequest,
    status,
    data: totalCountryData,
    error,
  } = useHttp("https://restcountries.com/v2/all");

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pend") {
    return null;
  }

  if (status === "completed" && error) {
    console.log(error);
    return null;
  }

  if (totalCountryData && status === "completed") {
    totalCountries = totalCountryData;
  }

  const countriesCodeList = props.borderCountries;

  const countriesNameList = countriesCodeList.map((code) => {
    return totalCountries.find((country) => country.alpha3Code === code).name;
  });

  const content = countriesNameList.map((country, index) => (
    <li key={index} className="shadowbox">
      {country}
    </li>
  ));

  return (
    <Fragment>
      <div className={classes.borders}>
        <ul>
          <li key="tag-title" className={classes["tag-title"]}>
            <b>Border Countries:</b>
          </li>
          {content}
        </ul>
      </div>
    </Fragment>
  );
};

export default BorderCountries;
