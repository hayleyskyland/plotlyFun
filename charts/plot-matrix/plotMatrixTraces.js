const y1 = [8, 10, 1, 10, 10, 10, 3, 4, 5, 8, 10, 12, 15, 3, 20, 22, 25, 29, 19, 22, 30, 21, 39, 40];
const y2 = [2, 5, 4, 6, 4, 19, 18, 20, 21, 22, 25, 39, 26, 28, 29, 25, 24, 38, 38];
const y3 = [1, 2, 10, 8, 33, 8, 7, 9, 9, 10, 19, 1, 2, 22, 22, 22, 26, 30, 38, 38, 30, 32, 33];

import { osmo, time, duration, temp, ph } from './plotMatrixData.js';

// row A

// A1
// x osmo
// y osmo

export const traceA1 = {
  x: osmo,
  y: osmo,
  xaxis: 'x1',
  yaxis: 'y1',    
  type: 'histogram',
  mode: 'markers',
  marker: { color: 'lightblue' },
};

// A2
// x time
// y osmo

export const traceA2 = {
  type: 'table',
  header: {
    values: [' <br><br>1.23'],
    align: 'center',
    height: '60',
    line: {width: 1, color: '#F5DEB3'},
    height: 170,
    font: {size: 22, color: 'plum'},
    style: {margin: 10000}
  },
  domain: {row: 0, column: 1}
};

// A3
// x duration
// y osmo

export const traceA3 = {
  type: 'table',
  header: {
    values: [' <br><br>1.23'],
    align: 'center',
    height: '60',
    line: {width: 1, color: '#F5DEB3'},
    height: 170,
    font: {size: 22, color: 'plum'},
    style: {margin: 10000}
  },
  domain: {row: 0, column: 2}
};

// A4
// x temp
// y osmo

export const traceA4 = {
  type: 'table',
  header: {
    values: [' <br><br>1.23'],
    align: 'center',
    height: '60',
    line: {width: 1, color: '#F5DEB3'},
    height: 170,
    font: {size: 22, color: 'plum'},
    style: {margin: 10000}
  },
  domain: {row: 0, column: 3}
};

// A5
// x ph
// y osmo

export const traceA5 = {
  type: 'table',
  header: {
    values: [' <br><br>1.23'],
    align: 'center',
    height: '60',
    line: {width: 1, color: '#F5DEB3'},
    height: 170,
    font: {size: 22, color: 'plum'},
    style: {margin: 10000}
  },
  domain: {row: 0, column: 4}
};

// row B

// B1
// x osmo
// y time

// Prod.Inputs.Osmo (mOsm/Kg)

export const traceB1a = {
  // y: [50.047, 50.026, 50.046, 50.064, 49.962, 50.037, 50.014, 50.048, 49.858, 50.052, 50.09, 50.142, 50.042, 49.886, 50.018, 50.025, 50.044, 49.939, 50.088, 50.126],
  // y: [0.222185555, 0.203529035, 0.069390728, 0.210656664, 0.756311295, 0.718137494, 0.436570875, 0.3024756, 0.173166258, 0.990413076, 0.283429698, 0.740910255, 0.149916672, 0.8618448],
  y: y1,
  xaxis: 'x6',
  yaxis: 'y6',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceB1b = {
  y: y2,
  xaxis: 'x6',
  yaxis: 'y6',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceB1c = {
  y: y3,
  xaxis: 'x6',
  yaxis: 'y6',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceB1d = {
  // y: yAvg,
  xaxis: 'x6',
  yaxis: 'y6',
  type: 'line',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// B2
// x time
// y time

export const traceB2 = {
  x: [20, 30, 40, 20, 10],
  y: [50, 60, 70, 5, 50],
  xaxis: 'x7',
  yaxis: 'y7',
  type: 'histogram',
  marker: { color: 'pink' },
};

// B3
// x duration
// y time

export const traceB3 = {
  type: 'table',
  header: {
    values: [' <br><br>1.23'],
    align: 'center',
    height: '60',
    line: {width: 1, color: '#F5DEB3'},
    height: 170,
    font: {size: 22, color: 'plum'},
    style: {margin: 10000}
  },
  domain: {row: 1, column: 2}
};

// B4
// x temp
// y time

export const traceB4 = {
  type: 'table',
  header: {
    values: [' <br><br>1.23'],
    align: 'center',
    height: '60',
    line: {width: 1, color: '#F5DEB3'},
    height: 170,
    font: {size: 22, color: 'plum'},
    style: {margin: 10000}
  },
  domain: {row: 1, column: 3}
};

// B5
// x ph
// y time

export const traceB5 = {
  type: 'table',
  header: {
    values: [' <br><br>1.23'],
    align: 'center',
    height: '60',
    line: {width: 1, color: '#F5DEB3'},
    height: 170,
    font: {size: 22, color: 'plum'},
    style: {margin: 10000}
  },
  domain: {row: 1, column: 4}
};

// row C

// c1
// x osmo
// y duration

export const traceC1a = {
  y: y1,
  xaxis: 'x11',
  yaxis: 'y11',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceC1b = {
  y: y2,
  xaxis: 'x11',
  yaxis: 'y11',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceC1c = {
  y: y3,
  xaxis: 'x11',
  yaxis: 'y11',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceC1d = {
  // y: yAvg,
  xaxis: 'x11',
  yaxis: 'y11',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// c2
// x time
// y duration

export const traceC2a = {
  y: y1,
  xaxis: 'x12',
  yaxis: 'y12',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceC2b = {
  y: y2,
  xaxis: 'x12',
  yaxis: 'y12',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceC2c = {
  y: y3,
  xaxis: 'x12',
  yaxis: 'y12',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceC2d = {
  // y: yAvg,
  xaxis: 'x12',
  yaxis: 'y12',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// c3
// x duration
// y duration

export const traceC3 = {
  x: [20, 30, 40, 50, 60],
  y: [50, 60, 70, 80, 90],
  xaxis: 'x13',
  yaxis: 'y13',
  type: 'histogram',
  marker: { color: 'lightblue' },
};

// c4
// x temp
// y duration

export const traceC4 = {
  type: 'table',
  header: {
    values: [' <br><br>1.23'],
    align: 'center',
    height: '60',
    line: {width: 1, color: '#F5DEB3'},
    height: 170,
    font: {size: 22, color: 'plum'},
    style: {margin: 10000}
  },
  domain: {row: 2, column: 3}
};

// c5
// x ph
// y duration

export const traceC5 = {
  type: 'table',
  header: {
    values: [' <br><br>1.23'],
    align: 'center',
    height: '60',
    line: {width: 1, color: '#F5DEB3'},
    height: 170,
    font: {size: 22, color: 'plum'},
    style: {margin: 10000}
  },
  domain: {row: 2, column: 4}
};

// row D

// d1
// x osmo
// y temp

export const traceD1a = {
  y: y1,
  xaxis: 'x16',
  yaxis: 'y16',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceD1b = {
  y: y2,
  xaxis: 'x16',
  yaxis: 'y16',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceD1c = {
  y: y3,
  xaxis: 'x16',
  yaxis: 'y16',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceD1d = {
  // y: yAvg,
  xaxis: 'x16',
  yaxis: 'y16',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// d2
// x time
// y temp

export const traceD2a = {
  y: y1,
  xaxis: 'x17',
  yaxis: 'y17',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceD2b = {
  y: y2,
  xaxis: 'x17',
  yaxis: 'y17',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceD2c = {
  y: y3,
  xaxis: 'x17',
  yaxis: 'y17',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceD2d = {
  // y: yAvg,
  xaxis: 'x17',
  yaxis: 'y17',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// d3
// x duration
// y temp

export const traceD3a = {
  y: y1,
  xaxis: 'x18',
  yaxis: 'y18',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceD3b = {
  y: y2,
  xaxis: 'x18',
  yaxis: 'y18',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceD3c = {
  y: y3,
  xaxis: 'x18',
  yaxis: 'y18',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceD3d = {
  // y: yAvg,
  xaxis: 'x18',
  yaxis: 'y18',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// d4
// x temp
// y temp

export const traceD4 = {
  x: [20, 30, 40, 30, 10],
  y: [50, 60, 70, 60, 10],
  xaxis: 'x19',
  yaxis: 'y19',
  type: 'histogram',
  marker: { color: 'pink' },
};

// d5
// x ph
// y temp

export const traceD5 = {
  type: 'table',
  header: {
    values: [' <br><br>1.23'],
    align: 'center',
    height: '60',
    line: {width: 1, color: '#F5DEB3'},
    height: 170,
    font: {size: 22, color: 'plum'},
    style: {margin: 10000}
  },
  domain: {row: 3, column: 4}
};

// row E

// e1
// x osmo
// y ph

export const traceE1a = {
  y: y1,
  xaxis: 'x21',
  yaxis: 'y21',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceE1b = {
  y: y2,
  xaxis: 'x21',
  yaxis: 'y21',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceE1c = {
  y: y3,
  xaxis: 'x21',
  yaxis: 'y21',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceE1d = {
  // y: yAvg,
  xaxis: 'x21',
  yaxis: 'y21',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// e2
// x time
// y ph

export const traceE2a = {
  y: y1,
  xaxis: 'x22',
  yaxis: 'y22',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceE2b = {
  y: y2,
  xaxis: 'x22',
  yaxis: 'y22',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceE2c = {
  y: y3,
  xaxis: 'x22',
  yaxis: 'y22',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceE2d = {
  // y: yAvg,
  xaxis: 'x22',
  yaxis: 'y22',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// e3
// x duration
// y ph

export const traceE3a = {
  y: y1,
  xaxis: 'x23',
  yaxis: 'y23',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceE3b = {
  y: y2,
  xaxis: 'x23',
  yaxis: 'y23',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceE3c = {
  y: y3,
  xaxis: 'x23',
  yaxis: 'y23',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceE3d = {
  // y: yAvg,
  xaxis: 'x23',
  yaxis: 'y23',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// e4
// x temp
// y ph

export const traceE4a = {
  y: y1,
  xaxis: 'x24',
  yaxis: 'y24',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceE4b = {
  y: y2,
  xaxis: 'x24',
  yaxis: 'y24',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceE4c = {
  y: y3,
  xaxis: 'x24',
  yaxis: 'y24',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceE4d = {
  // y: yAvg,
  xaxis: 'x24',
  yaxis: 'y24',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// e5
// x ph
// y ph

export const traceE5 = {
  x: [20, 30, 40, 10, 10],
  y: [50, 60, 70, 10, 20],
  xaxis: 'x25',
  yaxis: 'y25',
  type: 'histogram',
  marker: { color: 'lightblue' },
};