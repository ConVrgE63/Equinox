"use client";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const accountNames = accounts.map((a) => a.name);
  const balances = accounts.map((a) => a.currentBalance);

  const data = {
    datasets: [
      {
        label: "Banks",
        data: [254500,375550,566322],
        backgroundColor: ["#47a867", "#38b978", "#0b8f3a"],
      },
    ],
    labels: ['Bank 1', 'Bank 2','Bank 3'],
  };

  return (
    <Doughnut
      data={data}
      options={{
        cutout: '60%',
        plugins:{
          legend:{
            display: false
          }
        }
      }}
      />
  );
};

export default DoughnutChart;
