import React from "react";
import ChartBars from "./ChartBars";
import "./Charts.css"

const Charts = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart mt-6 p-6">
      {props.dataPoints.map(dataPoint => (
        <ChartBars
          key={dataPoint.label}
          value={dataPoint.vlaue}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Charts;
