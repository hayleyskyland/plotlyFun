// tester

// TESTER = document.getElementById('tester');

// Plotly.plot( TESTER,
//   [{
//     x: [1, 2, 3, 4, 5],
//     y: [1, 2, 4, 8, 16]
//   }],
//   { margin: { t: 0 } },
//   {showSendToCloud:true}
// );







// histogram

var xTotal = ['Kitties', 'Kitties', 'Kitties', 'Bunnies', 'Bunnies', 'Tanks', 'Tanks', 'Tanks', 'Tanks', 'Tanks']
var xCurrent = ['Kitties', 'Kitties', 'Tanks']

var trace = [
  {
    name: "Total",
    x: xTotal,
    type: 'histogram',
    marker: { color: 'pink' },
  },
  {
    name: "Current",
    x: xCurrent,
    type: 'histogram',
    marker: { color: 'lightgray' },
  }
]

var data = trace;

var layout = {
  bargap: 0.05, 
  bargroupgap: 0.2, 
  title: 'Histogram Test', 
  xaxis: {title: 'Time'}, 
  yaxis: {title: 'Quantity'},
  width: 500,
  height: 500,
};

Plotly.newPlot('histogram', data, layout);













// scatter

var x = [1, 2, 3, 4, 5]
var y = [50, 24, 53, 2, 1]

var trace = [
  {
    name: "Current",
    x: x,
    y: y,
    type: 'scatter',
    marker: { color: 'pink' },
  },
  {
    name: "Total",
    x: x,
    y: y,
    type: 'scatter',
    marker: { color: 'lightgray' },
  }
]

var data = trace;

var layout = {
  bargap: 0.05, 
  bargroupgap: 0.2, 
  title: 'Scatter Test', 
  xaxis: {title: 'Time'}, 
  yaxis: {title: 'Quantity'},
  width: 500,
  height: 500,
};

Plotly.newPlot('scatter', data, layout);