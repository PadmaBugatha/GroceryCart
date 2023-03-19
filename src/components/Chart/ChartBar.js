import React, { useState } from "react";
import "./ChartBar.css";

const ChartBar = (props) => {
  const [clickedOnMonth, setClickedOnMonth] = useState(false);
  // console.log(compareLabels);
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  const onTestingClick = () => {
    let x = props.label;
    props.onTestingClick(x);
    setClickedOnMonth(true);
    function greet() {
      setClickedOnMonth(false);
    }

    setTimeout(greet, 3000);
  };

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner" onClick={onTestingClick}>
        <div
          className={
            clickedOnMonth ? "chart-bar__fill_coloured" : "chart-bar__fill"
          }
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
