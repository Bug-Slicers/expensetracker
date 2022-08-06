import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
export default function LineChart(props) {
  return <Line data={props.chartData} options={props.options} />;
}
