import { Fragment, useContext, useEffect } from "react";
import FilterBar from "../components/Filter/FilterBar";
import SearchBar from "../components/Filter/SearchBar";

import CountryCardContainer from "../components/CountryCard/CountryCardContainer";

function MainPage() {
  return (
    <Fragment>
      <SearchBar />
      <FilterBar />
      <CountryCardContainer />
    </Fragment>
  );
}

export default MainPage;
