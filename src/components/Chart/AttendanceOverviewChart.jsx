import React, { useState, useEffect } from 'react'
import { Chart } from 'primereact/chart'

export default function AttendanceOverviewChart() {
    // initial state
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['Attend', 'Absent', 'Late'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [
                        '#0065FF',
                        '#6ad2ff',
                        '#E7CA29'
                    ],
                    hoverBackgroundColor: [
                        '#0065FF',
                        '#6ad2ff',
                        '#E7CA29'
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="card flex justify-content-center">
            <Chart type="pie" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    )
}
