import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  const clickedMonth = (monthname) => {
    props.clickedMonth(monthname);
  };

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          onTestingClick={clickedMonth}
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
