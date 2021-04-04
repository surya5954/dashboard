import React, { useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Transitions from '../../Animations/PaperTransition';
import errorHandler from '../../ErrorComp/ErrorComp'


const LineChart = (props) => {

    // If Data set is empty then this effect with Set the proper message on Card
    useEffect(() => {
        errorHandler();
    }, [])

    return (

        <Transitions>
            <Line data={props.data} height={250} options={{
                responsive: true,
                maintainAspectRatio: false
            }} />
        </Transitions>


    )
}


export default LineChart;