import React, { useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import Transitions from '../../Animations/Transitions/Transitions';
import { data, labels, options, actions } from './config';
import { Chart } from 'react-chartjs-2';


const LineChart = () => {
    const chartReference = useRef();

    return (
        <Transitions>
            <Line data={data} labels={labels} options={options} height={80} />
        </Transitions>


    )
}


export default LineChart;