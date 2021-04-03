import Utils from '../../../Utils';

// <block:setup:1>
const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

console.log(NUMBER_CFG);
export const labels = Utils.months({ count: 7 });
// </block:setup>

// <block:config:0>
export const options = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: (ctx) => 'Chart.js Line Chart - stacked=' + ctx.chart.options.scales.y.stacked
        },
        tooltip: {
            mode: 'index'
        },
    },
    interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
    },
    scales: {
        x: {
            title: {
                display: true,
                text: 'Month'
            }
        },
        y: {
            stacked: true,
            title: {
                display: true,
                text: 'Value'
            }
        }
    }
}



