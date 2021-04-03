import React from 'react'
import './ChartLayout.css';

import LineChart from '../../Charts/LineChart/LineChart';
import BarChart from '../../Charts/BarChart/BarChart';
import PieChart from '../../Charts/PieChart/PieChart';
import PolarChart from '../../Charts/PolarChart/PolarChart';
import RadarChart from '../../Charts/RadarChart/RadarChart';
import StackedChart from '../../Charts/StackedChart/StackedChart';


const ChartLayout = () => {
    return (
        <div className="container">
            <div className="grid-1">
                <div className="grid-item grid-item-1"><PieChart/></div>
                <div className="grid-item grid-item-2"><BarChart/></div>
                <div className="grid-item grid-item-3"><BarChart/></div>
                <div className="grid-item grid-item-4"><StackedChart /></div>
                <div className="grid-item-5">
                    <div className="grid-item-5-1">
                        <LineChart/>
                    </div>
                    <div className="grid-item-5-2">
                        <LineChart/>
                    </div>
                </div>
            </div>
            <div className="grid-2">
                <div className="grid-item grid-item-2-1">
                    <PolarChart/>
                </div>
                <div className="grid-item grid-item-2-2">
                    <RadarChart/>
                </div>
            </div>
        </div>
    )
}

export default ChartLayout;
