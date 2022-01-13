// data

import { osmo, time, duration, temp, ph, num } from './plotMatrixData.js';

// colors

const blue = { color: 'lightblue' }
const pink  = { color: 'pink' }
const plum = { color: 'plum' }

// A

// a1
// x osmo
// y osmo

export const traceA1 = {
  x: osmo,
  y: osmo,
  xaxis: 'x1',
  yaxis: 'y1',    
  type: 'histogram',
  mode: 'markers',
  marker: blue
};

// a2
// x time
// y osmo

export const traceA2 = {
  type: 'table',
  header: num,
  domain: {row: 0, column: 1}
};

// a3
// x duration
// y osmo

export const traceA3 = {
  type: 'table',
  header: num,
  domain: {row: 0, column: 2}
};

// a4
// x temp
// y osmo

export const traceA4 = { 
  type: 'table',
  header: num,
  domain: {row: 0, column: 3}
};

// a5
// x ph
// y osmo

export const traceA5 = {
  type: 'table',
  header: num,
  domain: {row: 0, column: 4}
};

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
  marker: pink
};

// b2
// x time
// y time

export const traceB2 = {
  x: time,
  y: time,
  xaxis: 'x7',
  yaxis: 'y7',
  type: 'histogram',
  marker: blue
};

// b3
// x duration
// y time

export const traceB3 = {
  type: 'table',
  header: num,
  domain: {row: 1, column: 2}
};

// b4
// x temp
// y time

export const traceB4 = {
  type: 'table',
  header: num,
  domain: {row: 1, column: 3}
};

// b5
// x ph
// y time

export const traceB5 = {
  type: 'table',
  header: num,
  domain: {row: 1, column: 4}
};

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
  marker: pink
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
  marker: pink
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
  marker: blue
};

// c4
// x temp
// y duration

export const traceC4 = {
  type: 'table',
  header: num,
  domain: {row: 2, column: 3}
};

// c5
// x ph
// y duration

export const traceC5 = {
  type: 'table',
  header: num,
  domain: {row: 2, column: 4}
};

// D

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
  marker: pink
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
  marker: pink
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
  marker: pink
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
  marker: blue
};

// d5
// x ph
// y temp

export const traceD5 = {
  type: 'table',
  header: num,
  domain: {row: 3, column: 4}
};

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
  marker: pink
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
  marker: pink
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
  marker: pink
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
  marker: pink
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
  marker: blue
};