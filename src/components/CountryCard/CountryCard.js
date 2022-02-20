import { Fragment } from "react";
import classes from "./CountryCard.module.css";

const CountryCard = (props) => {
  return (
    <Fragment>
      <img className={classes.flag} src={props.flag} />
      <div className={classes.info}>
        <h3>{props.name}</h3>
        <p className={classes["tag-title"]}>
          Population:&nbsp;<span>{props.population.toLocaleString()}</span>
        </p>
        <p className={classes["tag-title"]}>
          Region:&nbsp;<span>{props.region}</span>
        </p>
        <p className={classes["tag-title"]}>
          Capitial:&nbsp;<span>{props.capital}</span>
        </p>
      </div>
    </Fragment>
  );
};

export default CountryCard;
