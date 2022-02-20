import { useContext, useEffect } from "react";
import FilterBar from "./components/Filter/FilterBar";
import SearchBar from "./components/Filter/SearchBar";
import Layout from "./components/Layout/Layout";
import CountryCardContainer from "./components/CountryCard/CountryCardContainer";
import { CountryContext } from "./store/country-context";
import { ModeContext } from "./store/mode-context";

function App() {
  const mode = useContext(ModeContext).mode;

  const { setRegions, setCurrentCountries, setTotalCountries } =
    useContext(CountryContext);

  const classes = mode ? "dark-mode" : "day-mode";
  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v2/all");
        const countryData = await response.json();
        console.log(countryData);

        if (!response.ok)
          throw new Error(countryData.message || "Something went wrong");

        const regionData = [
          ...new Set(countryData.map((country) => country.region)),
        ];

        setRegions(regionData);
        setCurrentCountries(countryData);
        setTotalCountries(countryData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCountriesData();
  }, [setRegions, setTotalCountries, setCurrentCountries]);

  return (
    <div className={classes}>
      <Layout>
        <SearchBar />
        <FilterBar />
        <CountryCardContainer />
      </Layout>
    </div>
  );
}

export default App;
