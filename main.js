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

var x = ['Kitties', 'Kitties', 'Kitties', 'Bunnies', 'Bunnies', 'Snails']
var y = ['3', '3', '1', '3', '500', '500']

var trace = [
  {
    name: "Current",
    x: x,
    y: y,
    type: 'histogram',
    marker: { color: 'pink' },
  },
  {
    name: "Total",
    x: x,
    y: y,
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
  yaxis: {title: 'Quantity'}
};

Plotly.newPlot('histogram', data, layout);