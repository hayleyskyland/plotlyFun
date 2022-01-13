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

export const traceB1 = {
  x: osmo,
  y: time,
  xaxis: 'x6',
  yaxis: 'y6',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightgray' }
};

// B2
// x time
// y time

export const traceB2 = {
  x: time,
  y: time,
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

export const traceC1 = {
  x: osmo,
  y: y2,
  xaxis: 'x11',
  yaxis: 'y11',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

// c2
// x time
// y duration

export const traceC2 = {
  x: time,
  y: duration,
  xaxis: 'x12',
  yaxis: 'y12',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

// c3
// x duration
// y duration

export const traceC3 = {
  x: duration,
  y: duration,
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

export const traceD1 = {
  x: osmo,
  y: temp,
  xaxis: 'x16',
  yaxis: 'y16',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightgray' }
};

// d2
// x time
// y temp

export const traceD2 = {
  x: time,
  y: temp,
  xaxis: 'x17',
  yaxis: 'y17',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightgray' }
};

// d3
// x duration
// y temp

export const traceD3 = {
  x: duration,
  y: temp,
  xaxis: 'x18',
  yaxis: 'y18',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightgray' }
};

// d4
// x temp
// y temp

export const traceD4 = {
  x: temp,
  y: temp,
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

export const traceE1 = {
  x: osmo,
  y: ph,
  xaxis: 'x21',
  yaxis: 'y21',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

// e2
// x time
// y ph

export const traceE2 = {
  x: time,
  y: ph,
  y: y1,
  xaxis: 'x22',
  yaxis: 'y22',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

// e3
// x duration
// y ph

export const traceE3 = {
  x: duration,
  y: ph,
  xaxis: 'x23',
  yaxis: 'y23',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

// e4
// x temp
// y ph

export const traceE4 = {
  x: temp,
  y: ph,
  xaxis: 'x24',
  yaxis: 'y24',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

// e5
// x ph
// y ph

export const traceE5 = {
  x: ph,
  y: ph,
  xaxis: 'x25',
  yaxis: 'y25',
  type: 'histogram',
  marker: { color: 'lightblue' },
};