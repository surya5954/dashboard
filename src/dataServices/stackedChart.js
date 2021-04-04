import Utils from '../Utils';

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

const stackedChartService = {
    getData: async () => {
        // This is an async function, 
        // you can write an API call with await here to get data from service
        // For testing on error in consuming data API we can throw an error from here.
        // throw new Error();
        return {
            labels: Utils.months({ count: 7 }),
            datasets: [
                {
                    label: 'My First dataset',
                    data: Utils.numbers(NUMBER_CFG),
                    borderColor: Utils.CHART_COLORS.red,
                    backgroundColor: Utils.CHART_COLORS.red,
                    fill: true
                },
                {
                    label: 'My Second dataset',
                    data: Utils.numbers(NUMBER_CFG),
                    borderColor: Utils.CHART_COLORS.blue,
                    backgroundColor: Utils.CHART_COLORS.blue,
                    fill: true
                },
                {
                    label: 'My Third dataset',
                    data: Utils.numbers(NUMBER_CFG),
                    borderColor: Utils.CHART_COLORS.green,
                    backgroundColor: Utils.CHART_COLORS.green,
                    fill: true
                },
                {
                    label: 'My Fourth dataset',
                    data: Utils.numbers(NUMBER_CFG),
                    borderColor: Utils.CHART_COLORS.yellow,
                    backgroundColor: Utils.CHART_COLORS.yellow,
                    fill: true
                }
            ]
        };
    }
}

export default stackedChartService;