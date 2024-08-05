"use client";
import './chart.scss'

import { ChartOptions, ChartData, ScriptableContext, TooltipItem } from "chart.js";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);



const options: ChartOptions<"line"> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: function () {
          return "";
        },
        label: function (context: TooltipItem<"line">) {
          const value = context.raw as number;
          return `$${value.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`;
        },
        footer: function (context: TooltipItem<"line">[]) {
          const index = context[0].dataIndex;
          const label = context[0].chart.data.labels?.[index];
          return `${label}`;
        },
      },
      displayColors: false,
      backgroundColor: "#ffffff",
      titleColor: "#000",
      bodyColor: "#000",
      footerColor: "#000",
      borderColor: "#dddddd",
      borderWidth: 1,
      titleFont: {
        weight: "bold",
      },
      footerFont: {
        style: "oblique",
        weight: "bold",
        size: 11,
      },
    },
  },
  scales: {
    y: {
      grid: {
        display: true,
        color: "#edf1f3b4",
      },
      ticks: {
        display: true,
        callback: function(value: number | string) {
          if (typeof value === 'number' && value >= 1000) {
            return value / 1000 + 'k';
          }
          return value;
        },
        padding: 2,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  elements: {
    line: {
      tension: 0.6,
      borderDash: [50, 5],
    },
    point: {
      radius: 10,
      pointStyle: "rectRounded",
      backgroundColor: 'none',
      borderColor: 'none',
      hoverRadius: 7,
      hoverBackgroundColor: 'transparent',
      hoverBorderColor: '#fff',
      borderWidth: 0,
      hoverBorderWidth: 1.5,
    },
  },
};



const HomeLineChart = ({
  duration,
  data,
}: {
  duration: string;
  data: { [key: string]: ChartData<"line"> };
}) => {
  const chartData = {
    ...data[duration],
    datasets: data[duration].datasets.map(dataset => ({
      ...dataset,
      fill: true,
      backgroundColor: (context: ScriptableContext<"line">): CanvasGradient | string => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          return "rgba(75,192,192,0)";
        }
        const gradient = ctx.createLinearGradient(
          0,
          chartArea.top,
          0,
          chartArea.bottom
        );
        gradient.addColorStop(0, "rgba(75,192,192,0.5)");
        gradient.addColorStop(1, "rgba(75,192,192,0)");

        return gradient;
      },
      pointBackgroundColor: "transparent",
      borderColor: "rgba(75,192,192,1)",
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "#fff",
    })),
  };

  return (
    <div className="line__chart" >
      <Line options={options} data={chartData} />
    </div>
  );
};

export default HomeLineChart;
