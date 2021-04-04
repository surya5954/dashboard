import { Bar } from 'react-chartjs-2';
import Transitions from '../../Animations/PaperTransition';
import errorHandler from '../../ErrorComp/ErrorComp'
import React, { useEffect } from 'react';


const BarChart = (props) => {

    // If Data set is empty then this effect with Set the proper message on Card
    useEffect(() => {
        errorHandler();
    }, [])

    // This chart is getting data from porps    
    return (
        <Transitions>
            <Bar data={props.data} height={250} options={{
                responsive: true,
                maintainAspectRatio: false
            }} />
        </Transitions>
    )
}


export default BarChart;