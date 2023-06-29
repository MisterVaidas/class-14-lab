'use strict';

let canvasElem = document.getElementById('chart')

/* TODO:
 * - Instantiate a new AppState
 * - Use a method on that AppState to load vote data from localStorage.
 * - Create a data object for chart.js using your AppState's allProducts array.
 * - Combine the data object with configuration information for chart.js type, colors, etc
 * - Call chart.js with the configuration and the canvasElem
 *
 */



function renderChart() {
 const labels = appState.allProducts.map(product => product.name);
 const data = appState.allProducts.map(product => product.timesClicked)

 const chartData = {
    labels: labels,
    datasets: [{
        label: 'Number of Votes',
        data: data,
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
    }]
 };

 const config = {
    type: 'bar',
    data: chartData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
 };

 new Chart(canvasElem, config);

}

renderChart();
