import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import BgWhite from '../styles/BgWhite';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'bottom',
    },
    test: {
        position: 'bottom',
    }
  },
};

const labels = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avqust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"];
export const data = {
  labels,
  datasets: [
    
    {
      label: 'TIMSS',
      data: [0, 13, 20, 29, 34, 45, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#0bb78399',
      borderColor: '#0bb783',
    },
    {
      label: 'PISA',
      data: [0, 10, 20, 28, 19, 20, 0, 0, 0, 0, 0, 0],
      backgroundColor: '#4f95ff99',
      borderColor: '#4f95ff',
    },
    {
        id: 'test',
        label: 'PIRLS',
        data: [0, 0, 0, 9, 24, 34, 0, 0, 0, 0, 0, 0],
        backgroundColor: '#db3a2d99',
        borderColor: '#db3a2d',
        
    },
  ],
};

export default function Chart() {
  return <BgWhite className='chart'>
      <Line options={options} data={data} />
  </BgWhite>;
}
