import Utils from '../Utils';

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const lineChartService = {
    getData: async () => {
        // This is an async function, 
        // you can write an API call with await here to get data from service
        // For testing on error in consuming data API we can throw an error from here.
        // throw new Error();
        return {
            labels: Utils.months({ count: 7 }),
            datasets: [{
                label: 'My First Dataset',
                data: Utils.numbers(NUMBER_CFG),
                fill: false,
                borderColor: Utils.CHART_COLORS.red,
                tension: 0.1
            },
            {
                label: 'Dataset 2',
                data: Utils.numbers(NUMBER_CFG),
                fill: false,
                borderColor: Utils.CHART_COLORS.blue,
                tension: 0.1
            }
            ]
        };
    }
}

export default lineChartService;