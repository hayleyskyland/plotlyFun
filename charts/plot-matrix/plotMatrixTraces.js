// data

import { osmo, time, duration, temp, ph, num } from './plotMatrixData.js';

// colors

const histogramColor = { color: 'FCB07E' }
const scatterColor  = { color: '#5AA9E6' }

const histogram = (array, xaxis, yaxis) => {
  return {
    x: array,
    y: array,
    xaxis: xaxis,
    yaxis: yaxis,    
    type: 'histogram',
    mode: 'markers',
    marker: histogramColor
  };
}

const table = (xArray, yArray, row, column) => {
  return {
    type: 'table',
    header: num(xArray, yArray),
    domain: {row: row, column: column}
  };
}

// A

export const traceA1 = histogram(osmo, 'x1', 'y1')

export const traceA2 = table(time, osmo, 0, 1)

export const traceA3 = table(duration, osmo, 0, 2)

export const traceA4 = table(temp, osmo, 0, 3)

export const traceA5 = table(ph, osmo, 0, 4)

// B

// b1
// x osmo
// y time

export const traceB1 = {
  x: osmo,
  y: time,
  xaxis: 'x6',
  yaxis: 'y6',
  type: 'scatter',
  mode: 'markers',
  marker: scatterColor
};

// b2

export const traceB2 = histogram(time, 'x7', 'y7')

// b3

export const traceB3 = table(duration, time, 1, 2)

// b4

export const traceB4 = table(temp, time, 1, 3)

// b5

export const traceB5 = table(ph, time, 1, 4)

// C

// c1
// x osmo
// y duration

export const traceC1 = {
  x: osmo,
  y: duration,
  xaxis: 'x11',
  yaxis: 'y11',
  type: 'scatter',
  mode: 'markers',
  marker: scatterColor
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
  marker: scatterColor
};

// c3

export const traceC3 = histogram(duration, 'x13', 'y13')

// c4

export const traceC4 = table(temp, duration, 2, 3)

// c5

export const traceC5 = table(ph, duration, 2, 4)

// D

// d1

export const traceD1 = {
  x: osmo,
  y: temp,
  xaxis: 'x16',
  yaxis: 'y16',
  type: 'scatter',
  mode: 'markers',
  marker: scatterColor
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
  marker: scatterColor
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
  marker: scatterColor
};

// d4

export const traceD4 = histogram(temp, 'x19', 'y19')

// d5

export const traceD5 = table(ph, temp, 3, 4)

// E

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
  marker: scatterColor
};

// e2
// x time
// y ph

export const traceE2 = {
  x: time,
  y: ph,
  xaxis: 'x22',
  yaxis: 'y22',
  type: 'scatter',
  mode: 'markers',
  marker: scatterColor
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
  marker: scatterColor
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
  marker: scatterColor
};

// e5

export const traceE5 = histogram(ph, 'x25', 'y25')