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

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);



export default function RadarChart(props: any) {

  const { inputData } = props;

  const consolData = {
    labels: ['Openness', 'Conscientiousness', 'Extraversion', 'Agreeableness', 'Neuroticism'],
    datasets: [
      {
        label: '',
        data: inputData,
        backgroundColor: '#3840FF30',
        borderColor: '#3840FF',
        borderWidth: 1,
      },
    ],
  };

  return <Radar data={consolData} />;
}