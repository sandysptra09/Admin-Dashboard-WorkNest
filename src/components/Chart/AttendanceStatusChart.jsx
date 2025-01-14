import React, { useState, useEffect } from 'react'
import { Chart } from 'primereact/chart'

export default function AttendanceStatusChart() {

    // initialize state
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const data = {
            llabels: ['Attend', 'Absent', 'Late'],
            datasets: [
                {
                    data: [300, 50, 100],
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
        };
        const options = {
            cutout: '60%'
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <div className="">
            <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
        </div>
    )
}
