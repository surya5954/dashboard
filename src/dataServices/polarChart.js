import Utils from '../Utils';

const DATA_COUNT = 5;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const polarChartService = {
    getData: async () => {
        // This is an async function, 
        // you can write an API call with await here to get data from service
        // For testing on error in consuming data API we can throw an error from here.
        // throw new Error();
        return {
            labels: [
                'Red',
                'Green',
                'Yellow',
                'Grey',
                'Blue'
            ],
            datasets: [{
                label: 'My First Dataset',
                data: Utils.numbers(NUMBER_CFG),
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(75, 192, 192)',
                    'rgb(255, 205, 86)',
                    'rgb(201, 203, 207)',
                    'rgb(54, 162, 235)'
                ]
            }]
        };
    }
}

export default polarChartService;