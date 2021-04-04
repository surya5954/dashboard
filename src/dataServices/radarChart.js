import Utils from '../Utils';

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const radarChartService = {
    getData: async () => {
        // This is an async function, 
        // you can write an API call with await here to get data from service
        // For testing on error in consuming data API we can throw an error from here.
        // throw new Error();
        return {
            labels: [
                'Eating',
                'Drinking',
                'Sleeping',
                'Designing',
                'Coding',
                'Cycling',
                'Running'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: Utils.numbers(NUMBER_CFG),
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
                label: 'My Second Dataset',
                data: Utils.numbers(NUMBER_CFG),
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
        };
    }
}

export default radarChartService;