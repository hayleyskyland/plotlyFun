// data

import { osmo, time, duration, temp, ph, num } from './plotMatrixData.js';

// colors

const histogramColor = { color: 'FCB07E' }
const scatterColor  = { color: '#5AA9E6' }

// dynamic chart functions

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

const scatter = (xArray, yArray, xaxis, yaxis) => {
  return {
    x: xArray,
    y: yArray,
    xaxis: xaxis,
    yaxis: yaxis,
    type: 'scatter',
    mode: 'markers',
    marker: scatterColor
  };
}

// traces

// a

export const traceA1 = histogram(osmo, 'x1', 'y1')
export const traceA2 = table(time, osmo, 0, 1)
export const traceA3 = table(duration, osmo, 0, 2)
export const traceA4 = table(temp, osmo, 0, 3)
export const traceA5 = table(ph, osmo, 0, 4)

// b

export const traceB1 = scatter(osmo, time, 'x6', 'y6')
export const traceB2 = histogram(time, 'x7', 'y7')
export const traceB3 = table(duration, time, 1, 2)
export const traceB4 = table(temp, time, 1, 3)
export const traceB5 = table(ph, time, 1, 4)

// c

export const traceC1 = scatter(osmo, duration, 'x11', 'y11')
export const traceC2 = scatter(time, duration, 'x12', 'y12')
export const traceC3 = histogram(duration, 'x13', 'y13')
export const traceC4 = table(temp, duration, 2, 3)
export const traceC5 = table(ph, duration, 2, 4)

// d

export const traceD1 = scatter(osmo, temp, 'x16', 'y16')
export const traceD2 = scatter(time, temp, 'x17', 'y17')
export const traceD3 = scatter(duration, temp, 'x18', 'y18')
export const traceD4 = histogram(temp, 'x19', 'y19')
export const traceD5 = table(ph, temp, 3, 4)

// e

export const traceE1 = scatter(osmo, ph, 'x21', 'y21')
export const traceE2 = scatter(time, ph, 'x22', 'y22')
export const traceE3 = scatter(duration, ph, 'x23', 'y23')
export const traceE4 = scatter(temp, ph, 'x24', 'y24')
export const traceE5 = histogram(ph, 'x25', 'y25')