import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <input className={classes.search} placeholder="Search for a country..." />
  );
};

export default SearchBar;
