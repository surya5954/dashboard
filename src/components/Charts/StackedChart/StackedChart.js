import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Transitions from '../../Animations/PaperTransition';
import errorHandler from '../../ErrorComp/ErrorComp';

const LineChart = (props) => {

    useEffect(() => {
        errorHandler();
    }, [])

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        minHieght: 100,
        plugins: {
            title: {
                display: true,
                text: (ctx) => 'Chart.js Line Chart - stacked=' + ctx.chart.options.scales.y.stacked
            },
            tooltip: {
                mode: 'index'
            },
        },
        interaction: {
            mode: 'nearest',
            axis: 'x',
            intersect: false
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Month'
                }
            },
            y: {
                stacked: true,
                title: {
                    display: true,
                    text: 'Value'
                }
            }
        }
    }

    return (
        <Transitions>
            <Line data={props.data} height={250} options={options} />
        </Transitions>
    )
}


export default LineChart;