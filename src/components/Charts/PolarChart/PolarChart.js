import { Polar } from 'react-chartjs-2';
import Transitions from '../../Animations/PaperTransition';
import errorHandler from '../../ErrorComp/ErrorComp';
import React, { useEffect } from 'react'


const LineChart = (props) => {

    useEffect(() => {
        errorHandler();
    }, [])

    return (
        <Transitions>
            <Polar data={props.data} height={350} options={{
                responsive: true,
                maintainAspectRatio: false
            }} />
        </Transitions>
    )
}


export default LineChart;