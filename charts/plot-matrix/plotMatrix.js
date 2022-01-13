import { plotMatrixLayout } from './plotMatrixLayout.js';

import {
  traceA1,
  traceA2,
  traceA3,
  traceA4,
  traceA5,

  traceB1,
  traceB2,
  traceB3,
  traceB4,
  traceB5,

  traceC1,
  traceC2,
  traceC3,
  traceC4,
  traceC5,

  traceD1,
  traceD2,
  traceD3,
  traceD4,
  traceD5,

  traceE1,
  traceE2,
  traceE3,
  traceE4,
  traceE5
} from './plotMatrixTraces.js';

export const plotMatrix = () => {
  
  var data = [
    traceA1,
    traceA2,
    traceA3,
    traceA4,
    traceA5,
  
    traceB1,
    traceB2,
    traceB3,
    traceB4,
    traceB5,
  
    traceC1,
    traceC2,
    traceC3,
    traceC4,
    traceC5,
  
    traceD1,
    traceD2,
    traceD3,
    traceD4,
    traceD5,
  
    traceE1,
    traceE2,
    traceE3,
    traceE4,
    traceE5
  ];

  Plotly.newPlot('matrix-2', data, plotMatrixLayout);
}
