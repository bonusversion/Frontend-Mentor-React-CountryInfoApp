import React, { useCallback, useState } from "react";

export const CountryContext = React.createContext({
  regions: [],
  totalCountries: [],
  currentCountries: [],
  setRegions: () => {},
  setTotalCountries: () => {},
  setCurrentCountries: () => {},
});

export default (props) => {
  const [regions, setRegions] = useState([]);
  const [totalCountries, setTotalCountries] = useState([]);
  const [currentCountries, setCurrentCountries] = useState([]);

  const setRegionsHandler = useCallback((regionsData) => {
    setRegions(regionsData);
  }, []);

  const setTotalCountriesHandler = useCallback((countryData) => {
    setTotalCountries(countryData);
  }, []);

  const setCurrentCountriesHandler = useCallback((countryData) => {
    setCurrentCountries(countryData);
  }, []);

  const contextProvider = {
    regions: regions,
    totalCountries: totalCountries,
    currentCountries: currentCountries,
    setRegions: setRegionsHandler,
    setTotalCountries: setTotalCountriesHandler,
    setCurrentCountries: setCurrentCountriesHandler,
  };

  return (
    <CountryContext.Provider value={contextProvider}>
      {props.children}
    </CountryContext.Provider>
  );
};
