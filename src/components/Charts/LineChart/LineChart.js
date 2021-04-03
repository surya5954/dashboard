import React from 'react';
import { Line } from 'react-chartjs-2';
import Transitions from '../../Animations/Transitions/Transitions';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Paper from '../../Animations/Transitions/Transitions';



const useStyles = makeStyles({
    root: {
        // minWidth: 275,
        // maxWidth: 350
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        // marginBottom: 12,
    },
});

const LineChart = () => {

    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];
    const data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };
    return (

        <Transitions className={classes.root}>
            <CardContent>
                

                <Line data={data} />
            </CardContent>
            <CardActions>
                {/* <Button size="small">Learn More</Button> */}

            </CardActions>
        </Transitions>


    )
}


export default LineChart;