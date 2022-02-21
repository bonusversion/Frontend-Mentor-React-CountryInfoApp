import { Fragment, useContext } from "react";
import { CountryContext } from "../../store/country-context";
import { ModeContext } from "../../store/mode-context";

import classes from "./BorderCountries.module.css";

const BorderCountries = (props) => {
  const mode = useContext(ModeContext).mode;
  const { totalCountries } = useContext(CountryContext);

  const countriesCodeList = props.borderCountries;
  console.log(props);
  console.log("props.borderCountries", props.borderCountries);

  const countriesNameList = countriesCodeList.map((code) => {
    console.log(code);
    console.log(totalCountries);
    return totalCountries.find((country) => country.alpha3Code === code).name;
  });
  console.log(mode);
  const spanStyle = mode ? classes["li-day"] : classes["li-night"];
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
