import Utils from '../Utils';

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const lineChartService = {
    getData: async () => {
        // This is an async function, 
        // you can write an API call with await here to get data from service
        // throw new Error();
        return {
            labels: Utils.months({ count: 7 }),
            datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        };
    }
}

export default lineChartService;