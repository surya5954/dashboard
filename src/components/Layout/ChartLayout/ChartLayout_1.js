import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LineChart from '../../Charts/LineChart/LineChart';
import BarChart from '../../Charts/BarChart/BarChart';
import PieChart from '../../Charts/PieChart/PieChart';
import PolarChart from '../../Charts/PolarChart/PolarChart';
import RadarChart from '../../Charts/RadarChart/RadarChart';
import StackedChart from '../../Charts/StackedChart/StackedChart';

const useStyles = makeStyles((theme) => ({
    root: {
        // flexGrow: 1,

    },
    container: {
        padding: 10
    },
    secondContainer: {
        padding: 10,
        flexFlow: "column wrap"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function AutoGrid() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container className={classes.container}>
                <Grid item xs={8}>
                    <div>
                        <Grid container spacing={3} className={classes.container}>
                            <Grid item xs={4}>
                                <BarChart />
                            </Grid>
                            <Grid item xs={4}>
                                <BarChart />
                            </Grid>
                            <Grid item xs={4}>
                                <PieChart />
                            </Grid>
                        </Grid>
                        <Grid container spacing={3} className={classes.container}>
                            <Grid item xs>
                                <StackedChart />
                            </Grid>

                        </Grid>
                        {/* <Grid container spacing={3}>
                            <Grid item xs>
                                <RadarChart />
                            </Grid>
                            <Grid item xs>
                                <PolarChart />
                            </Grid>
                        </Grid> */}
                    </div>

                </Grid>
                <Grid item xs={4}>
                    <Grid container spacing={3} className={classes.secondContainer}>
                        <Grid item xs>
                            <LineChart />
                        </Grid>
                        <Grid item xs>
                            <LineChart />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
