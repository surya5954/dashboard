import Utils from '../Utils';

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const pieChartService = {
    getData: async () => {
        // This is an async function, 
        // you can write an API call with await here to get data from service
        // For testing on error in consuming data API we can throw an error from here.
        // throw new Error();
        return {
            labels: [
                'Red',
                'Blue',
                'Yellow'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4
            }]
        };
    }
}

export default pieChartService;