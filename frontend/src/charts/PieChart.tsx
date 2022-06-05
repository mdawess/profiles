import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// From: https://react-chartjs-2.js.org/examples/doughnut-chart

ChartJS.register(ArcElement, Tooltip, Legend);


export default function PieChart(props: any) {

  const { inputData, dlabel } = props;

  const consolData = {
    labels: dlabel,
    datasets: [
      {
        label: 'Analysiss',
        data: inputData,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Doughnut data={consolData} />;
}
