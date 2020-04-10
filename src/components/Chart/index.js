import React, { useState, useEffect } from "react";

import LineChart from "./LineChart";
import BarChart from "./BarChart";

import { fetchDailyData } from "../../service";

import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchMyAPI = async () => {
      const initialDailyData = await fetchDailyData();

      setDailyData(initialDailyData);
    };

    fetchMyAPI();
  }, []);

  return (
    <div className={styles.container}>
      {country ? (
        <BarChart
          confirmed={confirmed}
          recovered={recovered}
          deaths={deaths}
          country={country}
        />
      ) : (
        <LineChart dailyData={dailyData} />
      )}
    </div>
  );
};

export default Chart;
