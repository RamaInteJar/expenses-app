import React from "react";
import ChartBars from "./ChartBars";

const Charts = (props) => {
  const dataPointValues = props.dataPoint.map((dataPoints) => dataPoints.value);

  const totalMaximum = Math.max();

  return (
    <div>
      {props.dataPoints.map((dataPoint) => (
        <ChartBars
          key={dataPoint.label}
          value={dataPoint.vlaue}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Charts;
