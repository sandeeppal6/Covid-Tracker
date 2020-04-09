import React from "react";
import { Grid } from "@material-ui/core";
import { ScaleLoader } from "react-spinners";

import DataCard from "./DataCard";

import styles from "./Cards.module.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const loaderProps = {
    size: 60,
    color: "#DD4178",
    height: 60,
    width: 10,
    radius: 10,
    margin: 4,
    loading: true,
  };

  if (!confirmed) {
    return <ScaleLoader {...loaderProps} />;
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <DataCard
          cases={confirmed}
          lastUpdate={lastUpdate}
          heading="Infected"
          subHeading="Number of active cases of COVID-19."
          styleType="infected"
        />
        <DataCard
          cases={recovered}
          lastUpdate={lastUpdate}
          heading="Recovered"
          subHeading="Number of recoveries from COVID-19."
          styleType="recovered"
        />
        <DataCard
          cases={deaths}
          lastUpdate={lastUpdate}
          heading="Deaths"
          subHeading="Number of deaths caused by COVID-19."
          styleType="deaths"
        />
      </Grid>
    </div>
  );
};
export default Cards;
