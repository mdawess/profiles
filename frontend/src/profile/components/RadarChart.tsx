import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import '../../App.css';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

type ChartProps = {
    inputData: number[];
    colour: string;
}

export default function RadarChart(props: ChartProps) {
    const { inputData, colour } = props;

    const consolData = {
        labels: ['O', 'C', 'E', 'A', 'N'],
        // labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
        datasets: [
        {
            label: 'OCEAN',
            data: inputData,
            backgroundColor: colour + '30',
            borderColor: colour,
            borderWidth: 1,
        },
        ],
        options: {
            legend: {
                display: false
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItem: any) {
                        return tooltipItem.yLabel;
                }
            }
            }
        }
    };

    return (
        <div className='radar-chart'>
        <Radar data={consolData} />
        </div>
    );
}