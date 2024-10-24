import { useState } from "react";
import Chart from "react-apexcharts";

export function GraficChart() {
  const [options, setOptions] = useState({
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"],
      },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderRadiusApplication: "end",
          horizontal: true,
        },
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60],
      },
    ],
  });

  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options.options}
            series={options.series}
            type="bar"
            width="350"
          />
        </div>
      </div>
    </div>
  );
}
