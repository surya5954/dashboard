import React from 'react';
import { Line } from 'react-chartjs-2';
import Transitions from '../../Animations/Transitions/PaperTransition';
import { labels, options } from './config';
import ErrorComp from '../../ErrorComp/ErrorComp';

const LineChart = (props) => {
    return (
        <Transitions>
            {props.data.error ? <ErrorComp data={props.data.message} /> : null}
            <Line data={props.data.data} labels={labels} options={options} height={80} />
        </Transitions>


    )
}


export default LineChart;