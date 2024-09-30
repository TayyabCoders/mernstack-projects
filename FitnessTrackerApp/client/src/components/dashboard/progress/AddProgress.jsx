import React, { useEffect, useState } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

Chart.register(...registerables, ChartDataLabels); // Register the datalabels plugin

const ProgressChart = () => {
  const [progressData, setProgressData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userId, setUserId] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      const decodedToken = jwtDecode(token);
      const userIdFromToken = decodedToken._id;
      setUserId(userIdFromToken);
    }
    const fetchProgressData = async () => {
      try {
        const { data } = await axios.get(`http://localhost:5000/api/progress?userId=${userId}`);
        setProgressData(data);
      } catch (error) {
        console.error('Error fetching progress data', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProgressData();
  }, [userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!progressData || !progressData.length) {
    return <div>No progress data available</div>; // Handle case when no data is returned
  }

  const totalCalories = progressData.reduce((acc, entry) => acc + entry.totalCalories, 0);
  const totalCarbs = progressData.reduce((acc, entry) => acc + entry.totalCarbs, 0);
  const totalFats = progressData.reduce((acc, entry) => acc + entry.totalFats, 0);

  const totalNutrition = totalCalories + totalCarbs + totalFats;

  const pieData = {
    labels: ['Calories', 'Carbs', 'Fats'],
    datasets: [
      {
        label: 'Nutrition Distribution',
        data: [totalCalories, totalCarbs, totalFats],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const barData = {
    labels: ['Calories', 'Carbs', 'Fats'],
    datasets: [
      {
        label: 'Nutrition in Percentage',
        data: [
          ((totalCalories / totalNutrition) * 100).toFixed(2),
          ((totalCarbs / totalNutrition) * 100).toFixed(2),
          ((totalFats / totalNutrition) * 100).toFixed(2),
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        color: '#fff', // Change color as needed
        formatter: (value) => {
          const percentage = ((value / totalNutrition) * 100).toFixed(2); // Calculate percentage
          return `${percentage}%`; // Show percentage directly
        },
      },
    },
  };

  return (
    <div style={{ marginLeft: '20px' }}>
      <h2>Nutrition Progress</h2>
      <div style={{ width: '300px', height: '300px',marginLeft: '500px' , marginTop: '100px' }}>
        <h3>Pie Chart</h3>
        <Pie data={pieData} options={options} />
      </div>
      <div style={{ width: '300px', height: '300px',marginLeft: '500px' , marginTop: '100px' }}>
        <h3>Bar Chart</h3>
        <Bar data={barData} options={options} />
      </div>
    </div>
  );
};

export default ProgressChart;
