import { useContext, useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import useHttp from "./hooks/use-http";

import Layout from "./components/Layout/Layout";
import DetailPage from "./pages/DetailPage";
import MainPage from "./pages/MainPage";
import { CountryContext } from "./store/country-context";
import { ModeContext } from "./store/mode-context";

function App() {
  const { mode, pageStatus, setPageStatus } = useContext(ModeContext);

  const { setRegions, setCurrentCountries, setTotalCountries } =
    useContext(CountryContext);

  const {
    sendRequest,
    status,
    data: totalCountryData,
    error,
  } = useHttp("https://restcountries.com/v2/all");

  useEffect(() => {
    const fetchTotalData = async () => {
      setPageStatus("pend");
      await sendRequest();
      setPageStatus("completed");
    };

    fetchTotalData();
  }, []);

  useEffect(() => {
    if (status === "completed" && totalCountryData) {
      const regionData = [
        ...new Set(totalCountryData.map((country) => country.region)),
      ];
      setRegions(regionData);
      setCurrentCountries(totalCountryData);
      setTotalCountries(totalCountryData);
    }
  }, [status, totalCountryData]);

  const classes = mode ? "dark-mode" : "day-mode";

  document.getElementsByTagName("body")[0].style.backgroundColor = mode
    ? "hsl(207, 26%, 17%)"
    : "hsl(0, 0%, 98%)";

  return (
    <div className={classes}>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/countries" />
          </Route>
          <Route path="/countries" exact>
            <MainPage />
          </Route>
          <Route path="/countries/:countryCode" exact>
            <DetailPage />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
