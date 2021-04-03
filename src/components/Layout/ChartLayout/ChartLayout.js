import React, { useState, useEffect } from 'react'
import './ChartLayout.css';
import barChartService from '../../../dataServices/barChart';
import lineChartService from '../../../dataServices/lineChart';
import pieChartService from '../../../dataServices/pieChart';
import polarChartService from '../../../dataServices/polarChart';
import radarChartService from '../../../dataServices/radarChart';
import stackedChartService from '../../../dataServices/stackedChart';

import LineChart from '../../Charts/LineChart/LineChart';
import BarChart from '../../Charts/BarChart/BarChart';
import PieChart from '../../Charts/PieChart/PieChart';
import PolarChart from '../../Charts/PolarChart/PolarChart';
import RadarChart from '../../Charts/RadarChart/RadarChart';
import StackedChart from '../../Charts/StackedChart/StackedChart';

const ChartLayout = () => {
    const [barChartData, setBarChartData] = useState({ data: [], error: false, message: "" });
    const [lineChartData, setLineChartData] = useState({ data: [], error: false, message: "" });
    const [pieChartData, setPieChartData] = useState({ data: [], error: false, message: "" });
    const [polarChartData, setPolarChartData] = useState({ data: [], error: false, message: "" });
    const [radarChartData, setRadarChartData] = useState({ data: [], error: false, message: "" });
    const [stackedChartData, setStackedChartData] = useState({ data: [], error: false, message: "" });

    useEffect(() => {
        getChartDataFromService();
    }, [])

    const getChartDataFromService = () => {
        barChartService.getData()
            .then((data) => {
                setBarChartData({ data: data, error: false, message: "" });
            }).catch((err) => {
                setBarChartData({ data: [], error: true, message: "Unable to load data..." });
            })
        lineChartService.getData()
            .then((data) => {
                setLineChartData({ data: data, error: false, message: "" });
            }).catch((err) => {
                setLineChartData({ data: [], error: true, message: "Unable to load data..." });
            })
        pieChartService.getData()
            .then((data) => {
                setPieChartData({ data: data, error: false, message: "" });
            }).catch((err) => {
                setPieChartData({ data: [], error: true, message: "Unable to load data..." });
            })
        polarChartService.getData()
            .then((data) => {
                setPolarChartData({ data: data, error: false, message: "" });
            }).catch((err) => {
                setPolarChartData({ data: [], error: true, message: "Unable to load data..." });
            })
        radarChartService.getData()
            .then((data) => {
                setRadarChartData({ data: data, error: false, message: "" });
            }).catch((err) => {
                setRadarChartData({ data: [], error: true, message: "Unable to load data..." });
            })
        stackedChartService.getData()
            .then((data) => {
                setStackedChartData({ data: data, error: false, message: "" });
            }).catch((err) => {
                setStackedChartData({ data: [], error: true, message: "Unable to load data..." });
            })
    }


    return (
        <div className="container">
            <div className="grid-1">
                <div className="grid-item grid-item-1"><PieChart data={pieChartData} /></div>
                <div className="grid-item grid-item-2"><BarChart data={barChartData} /></div>
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
