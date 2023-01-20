import React from "react";

const ChartBars = (props) => {
  let barFillHeight = "0%";
  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="h-32 w-5 bg-blue-300  rounded-lg">
        <div className="chart-bar_fill" style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar_label">{props.label}</div>
    </div>
  );
};

export default ChartBars;
