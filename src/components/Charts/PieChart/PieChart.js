import { Pie } from 'react-chartjs-2';
import Transitions from '../../Animations/PaperTransition';
import errorHandler from '../../ErrorComp/ErrorComp';
import React, { useEffect } from 'react'


const LineChart = (props) => {
    useEffect(() => {
        errorHandler();
    }, [])

    return (
        <Transitions>
            <Pie data={props.data} options={{
                responsive: true,
                maintainAspectRatio: false
            }} />
        </Transitions>
    )
}


export default LineChart;