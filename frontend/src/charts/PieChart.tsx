import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart(props: any) {

  const data = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [props.value, 10-props.value],
        backgroundColor: [
          '#3840FF',
          '#D9D9D9'
        ],
        borderColor: [
          '#3840FF',
          '#D9D9D9'
        ],
        borderWidth: 1,
      },
    ],
    options: {
      cutout: 10,
      legend: {
          display: false
      },
      tooltips: {
          callbacks: {
             label: function(tooltipItem: any) {
                    return tooltipItem.yLabel;
             }
          }
      },
    }
  };

  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        }}
    >
      <div style={{ width: 85, height: 85 }}>
        <Doughnut data={data} options={{ cutout: 30 }} />
      </div>
      <h4 style={{ marginTop: 2 }}>{props.skill}</h4>
    </div>
  );
}