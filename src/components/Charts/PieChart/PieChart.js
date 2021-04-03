import { Pie } from 'react-chartjs-2';
import Transitions from '../../Animations/Transitions/PaperTransition';
import ErrorComp from '../../ErrorComp/ErrorComp';
import React from 'react'


const LineChart = (props) => {
    return (
        <Transitions>
            {props.data.error ? <ErrorComp data={props.data.message} /> : null}
            <Pie data={props.data.data} />
        </Transitions>
    )
}


export default LineChart;