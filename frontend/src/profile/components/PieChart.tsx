import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import '../../App.css'

ChartJS.register(ArcElement, Tooltip, Legend);

type PieChartProps = {
  skill: string;
  value: number;
  colour: string;
}

export default function PieChart(props: PieChartProps) {
  const { skill, value, colour } = props;

  const data = {
    labels: [],
    datasets: [
      {
        label: '# of Votes',
        data: [value, 10-value],
        backgroundColor: [
          colour,
          '#D9D9D9'
        ],
        borderColor: [
          colour,
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
        paddingLeft: 20,
        paddingRight: 20,
        }}
    >
      <div className='doughnut-chart'>
        <Doughnut data={data} options={{ cutout: 35 }} />
      </div>
      <h4 style={{ marginTop: 4, marginBottom: 0 }}>{skill}</h4>
    </div>
  );
}