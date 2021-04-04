import React, { useState, useEffect } from 'react'
import './ChartLayout.css';
// All data service imports 
import barChartService from '../../../dataServices/barChart';
import lineChartService from '../../../dataServices/lineChart';
import pieChartService from '../../../dataServices/pieChart';
import polarChartService from '../../../dataServices/polarChart';
import radarChartService from '../../../dataServices/radarChart';
import stackedChartService from '../../../dataServices/stackedChart';
// All view component imports
import LineChart from '../../Charts/LineChart/LineChart';
import BarChart from '../../Charts/BarChart/BarChart';
import PieChart from '../../Charts/PieChart/PieChart';
import PolarChart from '../../Charts/PolarChart/PolarChart';
import RadarChart from '../../Charts/RadarChart/RadarChart';
import StackedChart from '../../Charts/StackedChart/StackedChart';

// This is the main component to get data from service and populate them in view

const ChartLayout = () => {
    // States for all Chart components initalize with empty and error false

    const [barChartData, setBarChartData] = useState([]);
    const [lineChartData, setLineChartData] = useState([]);
    const [pieChartData, setPieChartData] = useState([]);
    const [polarChartData, setPolarChartData] = useState([]);
    const [radarChartData, setRadarChartData] = useState([]);
    const [stackedChartData, setStackedChartData] = useState([]);

    // The side effect of this component to call all the data service API and set the value in respective State
    useEffect(() => {
        getChartDataFromService();
    }, [])

    // This function is for calling data service API and error handling 
    // Since All charts are independent so I have called the asynchronus
    // All service have a getData function in it. 
    // On Error data is set to empty and Error is handle on Empty data set by the component itself 
    const getChartDataFromService = () => {
        barChartService.getData()
            .then((data) => {
                setBarChartData(data);
            }).catch((err) => {
                setBarChartData([]);
            })
        lineChartService.getData()
            .then((data) => {
                setLineChartData(data);
            }).catch((err) => {
                setLineChartData([]);
            })
        pieChartService.getData()
            .then((data) => {
                setPieChartData(data);
            }).catch((err) => {
                setPieChartData([]);
            })
        polarChartService.getData()
            .then((data) => {
                setPolarChartData(data);
            }).catch((err) => {
                setPolarChartData([]);
            })
        radarChartService.getData()
            .then((data) => {
                setRadarChartData(data);
            }).catch((err) => {
                setRadarChartData([]);
            })
        stackedChartService.getData()
            .then((data) => {
                setStackedChartData(data);
            }).catch((err) => {
                setStackedChartData([]);
            })
    }

    // This has all the magic !!
    // Layout for all the chart components 
    // I have used grid view over here with display flex.

    return (
        <div className="container">
            <div className="grid-1">
                <div className="grid-item grid-item-1"><PieChart data={pieChartData} /></div>
                <div className="grid-item grid-item-2"><PieChart data={pieChartData} /></div>
                <div className="grid-item grid-item-3"><PieChart data={pieChartData} /></div>
                <div className="grid-item grid-item-4"><StackedChart data={stackedChartData} /></div>
                <div className="grid-item-5">
                    <div className="grid-item-5-1">
                        <BarChart data={barChartData} />
                    </div>
                    <div className="grid-item-5-2">
                        <LineChart data={lineChartData} />
                    </div>
                </div>
            </div>
            <div className="grid-2">
                <div className="grid-item grid-item-2-1">
                    <PolarChart data={polarChartData} />
                </div>
                <div className="grid-item grid-item-2-2">
                    <RadarChart data={radarChartData} />
                </div>
            </div>
        </div>
    )
}

export default ChartLayout;
