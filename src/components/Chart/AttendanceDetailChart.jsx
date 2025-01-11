import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function AttendanceDetailChart() {
    // Initialize state
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = '#1E293B';
        const textColorSecondary = '#64748B';
        const surfaceBorder = '#E2E8F0';

        const data = {
            labels: ['Sunday', 'Monday', 'Tuesday', 'Weednesday', 'Thursday', 'Friday', 'Saturday'],
            datasets: [
                {
                    label: 'Male',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#0065FF',
                    backgroundColor: '#0065FF',
                    tension: 0.4,
                    pointRadius: 5,
                    pointHoverRadius: 7
                },
                {
                    label: 'Female',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#E7CA29',
                    backgroundColor: '#E7CA29',
                    tension: 0.4,
                    pointRadius: 5,
                    pointHoverRadius: 7
                }
            ]
        };

        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.7,
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                        font: {
                            family: 'Poppins, sans-serif',
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            family: 'Poppins, sans-serif',
                        }
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            family: 'Poppins, sans-serif',
                        }
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="line" data={chartData} options={chartOptions} />
        </div>
    );
}
