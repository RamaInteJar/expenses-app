import React from "react";

const ChartBars = (props) => {
  let barFillHeight = "0%";
  if (props.max > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="h-32 w-5 bg-purple-900  rounded-lg ">
        <div style={{ height: barFillHeight }}></div>
      </div>
      <div className="chart-bar_label">{props.label}</div>
    </div>
  );
};

export default ChartBars;
