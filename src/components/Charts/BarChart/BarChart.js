import { Bar } from 'react-chartjs-2';
import Transitions from '../../Animations/Transitions/PaperTransition';
import ErrorComp from '../../ErrorComp/ErrorComp'
import React from 'react'


const BarChart = (props) => {

    return (
        <Transitions>
            {props.data.error ? <ErrorComp data={props.data.message} /> : null}
            <Bar data={props.data.data} />
        </Transitions>

    )
}


export default BarChart;