// data

import { osmo, time, duration, temp, ph, num } from './plotMatrixData.js';

// colors

const histogramColor = { color: 'FCB07E' }
const scatterColor  = { color: '#5AA9E6' }

// dynamic chart functions

const histogram = (array, xaxis, yaxis, hover) => {
  return {
    x: array,
    y: array,
    xaxis: xaxis,
    yaxis: yaxis,    
    type: 'histogram',
    mode: 'markers',
    marker: histogramColor,
    // text: hover,
    // hoverinfo: 'text'
  };
}

const table = (xArray, yArray, row, column, hover) => {
  return {
    type: 'table',
    header: num(xArray, yArray),
    domain: {row: row, column: column},
    // text: hover,
    // hoverinfo: 'text'
  };
}

const scatter = (xArray, yArray, xaxis, yaxis, hover) => {
  return {
    x: xArray,
    y: yArray,
    xaxis: xaxis,
    yaxis: yaxis,
    type: 'scatter',
    mode: 'markers',
    marker: scatterColor,
    // text: hover,
    // hoverinfo: 'text'
  };
}

// traces

// a

export const traceA1 = histogram(osmo, 'x1', 'y1', 'osmo * osmo')
export const traceA2 = table(time, osmo, 0, 1, 'osmo * time')
export const traceA3 = table(duration, osmo, 0, 2, 'osmo * duration')
export const traceA4 = table(temp, osmo, 0, 3, 'osmo * temp')
export const traceA5 = table(ph, osmo, 0, 4, 'osmo * pH')

// b

export const traceB1 = scatter(osmo, time, 'x6', 'y6', 'time * osmo')
export const traceB2 = histogram(time, 'x7', 'y7', 'time * time')
export const traceB3 = table(duration, time, 1, 2, 'time * duration')
export const traceB4 = table(temp, time, 1, 3, 'time * temp')
export const traceB5 = table(ph, time, 1, 4, 'time * pH')

// c

export const traceC1 = scatter(osmo, duration, 'x11', 'y11', 'duration * temp')
export const traceC2 = scatter(time, duration, 'x12', 'y12', 'duration * timee')
export const traceC3 = histogram(duration, 'x13', 'y13', 'duration * duration')
export const traceC4 = table(temp, duration, 2, 3, 'duration * temp')
export const traceC5 = table(ph, duration, 2, 4, 'duration & pH')

// d

export const traceD1 = scatter(osmo, temp, 'x16', 'y16', 'temp * osmo')
export const traceD2 = scatter(time, temp, 'x17', 'y17', 'temp * time')
export const traceD3 = scatter(duration, temp, 'x18', 'y18', 'temp * duration')
export const traceD4 = histogram(temp, 'x19', 'y19', 'temp * temp')
export const traceD5 = table(ph, temp, 3, 4, 'temp * pH')

// e

export const traceE1 = scatter(osmo, ph, 'x21', 'y21', 'pH * osmo')
export const traceE2 = scatter(time, ph, 'x22', 'y22', 'pH & time')
export const traceE3 = scatter(duration, ph, 'x23', 'y23', 'pH * duration')
export const traceE4 = scatter(temp, ph, 'x24', 'y24', 'pH * temp')
export const traceE5 = histogram(ph, 'x25', 'y25', 'pH * pH')