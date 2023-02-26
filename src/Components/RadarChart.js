import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const RadarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartCanvas = chartRef.current.getContext('2d');
    const chart = new Chart(chartCanvas, {
      type: 'radar',
      data: {
        labels: ['React', 'Angular', 'Vue', 'CSS', 'HTML', 'Sketch', 'JavaScript'],
        datasets: [
          {
            label: 'Popularity',
            data: [91, 71, 55, 80, 79, 60, 95],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          r: {
            suggestedMin: 0,
            suggestedMax: 100,
            stepSize: 20
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <canvas ref={chartRef} width="400" height="400" />
  );
};

export default RadarChart;
