import { plotMatrixLayout } from './plotMatrixLayout.js';

import {
  traceA1,
  // traceA2a, traceA2b, traceA2c, traceA2d,
  traceA2,
  traceA3a, traceA3b, traceA3c, traceA3d,
  traceA4a, traceA4b, traceA4c, traceA4d,
  traceA5a, traceA5b, traceA5c, traceA5d,

  traceB1a, traceB1b, traceB1c, traceB1d,
  traceB2,
  traceB3a, traceB3b, traceB3c, traceB3d,
  traceB4a, traceB4b, traceB4c, traceB4d,
  traceB5a, traceB5b, traceB5c, traceB5d,

  traceC1a, traceC1b, traceC1c, traceC1d,
  traceC2a, traceC2b, traceC2c, traceC2d,
  traceC3,
  traceC4a, traceC4b, traceC4c, traceC4d,
  traceC5a, traceC5b, traceC5c, traceC5d,

  traceD1a, traceD1b, traceD1c, traceD1d,
  traceD2a, traceD2b, traceD2c, traceD2d,
  traceD3a, traceD3b, traceD3c, traceD3d,
  traceD4,
  traceD5a, traceD5b, traceD5c, traceD5d,

  traceE1a, traceE1b, traceE1c, traceE1d,
  traceE2a, traceE2b, traceE2c, traceE2d,
  traceE3a, traceE3b, traceE3c, traceE3d,
  traceE4a, traceE4b, traceE4c, traceE4d,
  traceE5
} from './plotMatrixTraces.js';

export const plotMatrix = () => {
  
  var data = [
    traceA1,
    // traceA2a, traceA2b, traceA2c, traceA2d,
    traceA2,
    traceA3a, traceA3b, traceA3c, traceA3d,
    traceA4a, traceA4b, traceA4c, traceA4d,
    traceA5a, traceA5b, traceA5c, traceA5d,

    traceB1a, traceB1b, traceB1c, traceB1d,
    traceB2,
    traceB3a, traceB3b, traceB3c, traceB3d,
    traceB4a, traceB4b, traceB4c, traceB4d,
    traceB5a, traceB5b, traceB5c, traceB5d,

    traceC1a, traceC1b, traceC1c, traceC1d,
    traceC2a, traceC2b, traceC2c, traceC2d,
    traceC3,
    traceC4a, traceC4b, traceC4c, traceC4d,
    traceC5a, traceC5b, traceC5c, traceC5d,

    traceD1a, traceD1b, traceD1c, traceD1d,
    traceD2a, traceD2b, traceD2c, traceD2d,
    traceD3a, traceD3b, traceD3c, traceD3d,
    traceD4,
    traceD5a, traceD5b, traceD5c, traceD5d,

    traceE1a, traceE1b, traceE1c, traceE1d,
    traceE2a, traceE2b, traceE2c, traceE2d,
    traceE3a, traceE3b, traceE3c, traceE3d,
    traceE4a, traceE4b, traceE4c, traceE4d,
    traceE5
  ];

  Plotly.newPlot('matrix-2', data, plotMatrixLayout);
}
