import { plotMatrixLayout } from './plotMatrixLayout.js';

import {
  traceA1,
  traceA2,
  traceA3,
  traceA4,
  traceA5,

  traceB1,
  // traceB1a, traceB1b, traceB1c, traceB1d,
  traceB2,
  traceB3,
  traceB4,
  traceB5,

  traceC1,
  // traceC1a, traceC1b, traceC1c, traceC1d,
  traceC2,
  // traceC2a, traceC2b, traceC2c, traceC2d,
  traceC3,
  traceC4,
  traceC5,

  traceD1,
  // traceD1a, traceD1b, traceD1c, traceD1d,
  traceD2,
  // traceD2a, traceD2b, traceD2c, traceD2d,
  traceD3,
  // traceD3a, traceD3b, traceD3c, traceD3d,
  traceD4,
  traceD5,

  traceE1,
  // traceE1a, traceE1b, traceE1c, traceE1d,
  traceE2,
  // traceE2a, traceE2b, traceE2c, traceE2d,
  traceE3,
  // traceE3a, traceE3b, traceE3c, traceE3d,
  traceE4,
  // traceE4a, traceE4b, traceE4c, traceE4d,
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
    // traceB1a, traceB1b, traceB1c, traceB1d,
    traceB2,
    traceB3,
    traceB4,
    traceB5,

    traceC1,
    // traceC1a, traceC1b, traceC1c, traceC1d,
    traceC2,
    // traceC2a, traceC2b, traceC2c, traceC2d,
    traceC3,
    traceC4,
    traceC5,

    traceD1,
    // traceD1a, traceD1b, traceD1c, traceD1d,
    traceD2,
    // traceD2a, traceD2b, traceD2c, traceD2d,
    traceD3,
    // traceD3a, traceD3b, traceD3c, traceD3d,
    traceD4,
    traceD5,

    traceE1,
    // traceE1a, traceE1b, traceE1c, traceE1d,
    traceE2,
    // traceE2a, traceE2b, traceE2c, traceE2d,
    traceE3,
    // traceE3a, traceE3b, traceE3c, traceE3d,
    traceE4,
    // traceE4a, traceE4b, traceE4c, traceE4d,
    traceE5
  ];

  Plotly.newPlot('matrix-2', data, plotMatrixLayout);
}
