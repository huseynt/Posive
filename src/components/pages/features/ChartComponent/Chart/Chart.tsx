"use client";
import './chart.scss';

interface ICardReportObject {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
  }[];
}

import {
  ChartOptions,
  ScriptableContext,
  TooltipItem,
} from 'chart.js';

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
} from 'chart.js';
import { Line } from 'react-chartjs-2';

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

const options: ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        title: function () {
          return '';
        },
        label: function (context: TooltipItem<'line'>) {
          const value = context.raw as number;
          return `$${value.toLocaleString(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}`;
        },
        footer: function (context: TooltipItem<'line'>[]) {
          const index = context[0].dataIndex;
          const label = context[0].chart.data.labels?.[index];
          return `${label}`;
        },
      },
      displayColors: false,
      backgroundColor: '#ffffff',
      titleColor: '#000',
      bodyColor: '#000',
      footerColor: '#000',
      borderColor: '#dddddd',
      borderWidth: 1,
      titleFont: {
        weight: 'bold',
      },
      footerFont: {
        style: 'oblique',
        weight: 'bold',
        size: 11,
      },
    },
  },
  scales: {
    y: {
      grid: {
        display: true,
        color: '#edf1f3b4',
      },
      ticks: {
        display: true,
        callback: function (value: number | string) {
          if (typeof value === 'number' && value >= 1000) {
            return value / 1000 + 'k';
          }
          return value;
        },
        padding: 7,
      },
      border: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        padding: 5,
      },
      border: {
        display: false,
      },
    },
  },
  elements: {
    line: {
      tension: 0.7,
      borderDash: [40, 5],
    },
    point: {
      radius: 10,
      pointStyle: 'rectRounded',
      backgroundColor: 'none',
      borderColor: 'none',
      hoverRadius: 8,
      hoverBackgroundColor: 'transparent',
      hoverBorderColor: '#fff',
      borderWidth: 0,
      hoverBorderWidth: 1.5,
    },
  },
};

interface HomeLineChartProps {
  data: ICardReportObject;
}

const HomeLineChart: React.FC<HomeLineChartProps> = ({ data }) => {
  const chartData = {
    ...data,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      fill: true,
      backgroundColor: (context: ScriptableContext<'line'>): CanvasGradient | string => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          return 'rgba(75,192,192,0)';
        }
        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
        gradient.addColorStop(0, 'rgba(75,192,192,0.5)');
        gradient.addColorStop(1, 'rgba(75,192,192,0)');

        return gradient;
      },
      pointBackgroundColor: 'transparent',
      borderColor: 'rgba(75,192,192,1)',
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: '#fff',
    })),
  };

  return (
    <div className="line__chart">
      <Line options={options} data={chartData} />
    </div>
  );
};

export default HomeLineChart;