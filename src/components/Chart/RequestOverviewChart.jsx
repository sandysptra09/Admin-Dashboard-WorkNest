import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';

export default function RequestOverviewChart() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const pastelColors = [
            '#0065FF',
            '#6ad2ff ',
            '#E7CA29',
            '#bdc3e1',
        ];

        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = '#495057';
        const gridColor = '#e9ecef';

        const data = {
            datasets: [
                {
                    data: [14, 16, 7, 3],
                    backgroundColor: pastelColors,
                    hoverBackgroundColor: pastelColors.map(color => `${color}AA`),
                    label: 'Request Overview Dataset'
                }
            ],
            labels: ['Annual', 'Personal', 'Sick', 'Vacation']
        };

        const options = {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        color: textColor,
                        font: {
                            size: 13,
                            family: 'Poppins, sans-serif'
                        },
                        usePointStyle: true
                    }
                }
            },
            scales: {
                r: {
                    grid: {
                        color: gridColor
                    },
                    angleLines: {
                        color: gridColor
                    },
                    pointLabels: {
                        color: textColor,
                        font: {
                            size: 12
                        }
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-center w-full h-[300px]">
            <Chart type="polarArea" data={chartData} options={chartOptions} />
        </div>
    );
}
