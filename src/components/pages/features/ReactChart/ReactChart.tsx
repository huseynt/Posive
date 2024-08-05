import React from "react";
import { Line } from "react-chartjs-2";
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
  // ScriptableContext,
} from "chart.js";
import { ChartData, ChartOptions } from "chart.js";

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

import {orders} from '../../../test/db/transactions'

const IncomeChart: React.FC = () => {

  console.log(orders.map(order => order.totalPrice));



  const data: ChartData<"line"> = {
    // labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
    // labels: orders.map(order => new Date(order.dateTime).toLocaleDateString('en-US', {month: 'short'})),
    // last 12 month data filter then map
    labels: orders
      .filter(
        (order) =>
          new Date(order.dateTime).getTime() >
          new Date().getTime() - 1000 * 60 * 60 * 24 * 30 * 12
      )
      .map((order) =>
        new Date(order.dateTime).toLocaleDateString("en-US", { month: "short" })
      ),
    datasets: [
      {
        label: "Income",
        // data: [4000, 4500, 4200, 4800, 4552, 4700, 4900, 5100],
        // data: orders.map(order => order.totalPrice),
        // last 12 month data filter then map
        data: orders
          .filter(
            (order) =>
              new Date(order.dateTime).getTime() >
              new Date().getTime() - 1000 * 60 * 60 * 24 * 30 * 12
          )
          .map((order) => order.totalPrice/1000),


        fill: true, // Xəttin aşağısını doldurmaq üçün
        backgroundColor: (context: any) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            return null;
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
        borderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "rgba(75,192,192,1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(75,192,192,1)",
        tension: 0.4, // Xəttin dalğavari olması üçün
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Leybları gizlətmək üçün
      },
      tooltip: {

        callbacks: {
          title: function () {
            return "";
          },
          label: function (context: any) {
            return `$${context.raw.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}`;
          },
          footer: function (context: any) {
            const index = context[0].dataIndex;
            const label = context[0].chart.data.labels[index];
            return `${label} 23, 2024`;
          },
        },
        displayColors: false,
        backgroundColor: "#ffffff",
        titleColor: "#000000",
        bodyColor: "#000000",
        footerColor: "#888888",
        borderColor: "#dddddd",
        borderWidth: 1,
        titleFont: {
          weight: "bold",
        },
        footerFont: {
          style: "italic",
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: true, // X oxunun grid xəttlərini gizlətmək üçün
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value: number | string) {
            return `$${value}`;
          },
        },
        grid: {
          color: "rgba(200, 200, 200, 0.2)", // Y oxunun grid xəttlərinin rəngini dəyişmək üçün
        },
      },
    },
    elements: {
      line: {
        tension: 0.4, // Xəttin dalğavari olması üçün
      },
      point: {
        radius: 5, // Nöqtələrin radiusunu dəyişmək üçün
      },
    },
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", color: "#333" }}>Income Statistics</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default IncomeChart;
