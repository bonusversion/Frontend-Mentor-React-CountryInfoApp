import { Fragment, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useHttp from "../hooks/use-http";
import BorderCountries from "../components/Details/BorderCountries";
import { ModeContext } from "../store/mode-context";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

const DetailPage = () => {
  const mode = useContext(ModeContext).mode;
  const params = useParams();

  const { countryCode } = params;

  const {
    sendRequest,
    status,
    data: countryData,
    error,
  } = useHttp(`https://restcountries.com/v2/alpha/${countryCode}`);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  const pageBackHandler = () => {
    window.history.back(-1);
  };

  if (status === "pend") {
    return <LoadingSpinner></LoadingSpinner>;
  }
  if (status === "completed" && error) {
    console.log("custom error", error);
    return null;
  }

  const backBtnStyle = mode ? "back-btn-night" : "back-btn-day";
  return (
    <Fragment>
      <button className={backBtnStyle} onClick={pageBackHandler}>
        Back
      </button>
      <img className="img-detail" src={countryData.flag} />
      <div className="info-sheet">
        <h2>{countryData.name}</h2>
        <table>
          <tbody>
            <tr>
              <td>
                <b>Native Name:</b>&nbsp;{countryData.nativeName}
              </td>
              <td>
                <b>Top Level Domain:</b>&nbsp;{countryData.topLevelDomain}
              </td>
            </tr>
            <tr>
              <td>
                <b>Population:</b>&nbsp;{countryData.population}
              </td>
              <td>
                <b>Currencies:</b>&nbsp;{countryData.currencies.code}
              </td>
            </tr>
            <tr>
              <td>
                <b>Region:</b>&nbsp;{countryData.region}
              </td>
              <td>
                <b>Languages:</b>&nbsp;
                {countryData.languages
                  .map((language) => language.name)
                  .join(", ")}
              </td>
            </tr>
            <tr>
              <td>
                <b>Sub Region:</b>&nbsp;{countryData.subregion}
              </td>
            </tr>
            <tr>
              <td>
                <b>Capital:</b>&nbsp;{countryData.capital}
              </td>
            </tr>
          </tbody>
        </table>
        {countryData.borders && (
          <BorderCountries borderCountries={countryData.borders} />
        )}
      </div>
    </Fragment>
  );
};

export default DetailPage;
