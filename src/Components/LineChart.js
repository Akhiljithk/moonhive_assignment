import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const LineChart = ({ id }) => {
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chart) {
      chart.destroy();
    }
    if (chartRef.current) {
      const newChart = new Chart(chartRef.current, {
        type: 'line',
        data: {
          labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
          datasets: [
            {
              label: 'Dataset 1',
              data: [15, 10, 12, 8, 7, 5, 9],
              borderColor: 'blue',
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
      setChart(newChart);
    }
  }, [chart, id]);

  return <canvas ref={chartRef} id={2} />;
};

export default LineChart;
