import React from 'react';
import {
    CategoryScale,
    Chart as ChartJS,
    LinearScale,
    PointElement,
    Title,
    Tooltip,
    Legend,
    BarElement,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Container, Paper } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Last 6 months expenses',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Credit',
            data: [5, 6, 7, 8, 9, 10],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Debit',
            data: [12, 13, 14, 15, 16, 17],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

const ExpenseBarChart = (props) => {
    return (
        <Container sx={{ my: '1rem' }}>
            <Paper elevation={2} sx={{ p: '1rem', height: '415px' }}>
                <Bar options={options} data={data} />
            </Paper>
        </Container>
    );
};

export default ExpenseBarChart;
