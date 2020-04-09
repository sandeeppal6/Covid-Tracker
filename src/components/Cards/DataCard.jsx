import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";

import styles from "./Cards.module.css";

const DataCard = ({ cases, lastUpdate, heading, subHeading, styleType }) => {
  return (
    <>
      <Grid
        item
        xs={12}
        md={3}
        component={Card}
        className={cx(styles.card, styles[styleType])}
      >
        <CardContent>
          <Typography className={styles[styleType]} gutterBottom>
            {heading}
          </Typography>
          <Typography variant="h5" component="h2">
            <CountUp
              start={0}
              end={cases.value}
              duration={2.75}
              separator=","
            />
          </Typography>
          <Typography color="textSecondary">
            {new Date(lastUpdate).toDateString()}
          </Typography>
          <Typography variant="body2" component="p">
            {subHeading}
          </Typography>
        </CardContent>
      </Grid>
    </>
  );
};
export default DataCard;
