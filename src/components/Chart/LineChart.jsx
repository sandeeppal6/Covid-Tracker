import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ dailyData }) => {
  return (
    <>
      {dailyData[0] ? (
        <Line
          data={{
            labels: dailyData.map(({ date }) => date),
            datasets: [
              {
                data: dailyData.map((data) => data.confirmed),
                label: "Infected",
                borderColor: "#3333ff",
                fill: true,
              },
              {
                data: dailyData.map((data) => data.deaths),
                label: "Deaths",
                borderColor: "red",
                backgroundColor: "rgba(255, 0, 0, 0.5)",
                fill: true,
              },
            ],
          }}
        />
      ) : null}
    </>
  );
};

export default LineChart;
