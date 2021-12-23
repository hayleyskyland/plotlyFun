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

var x = [];

for (var i = 0; i < 500; i ++) {
	x[i] = Math.random();
}

var trace = {
  x: x,
  type: 'histogram',
};

var data = [trace];

Plotly.newPlot('histogram', data);