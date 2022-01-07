import { plotMatrixLayout } from './plotMatrixLayout.js';

import {
  traceA1,
  traceA2a, traceA2b, traceA2c, traceA2d,
  traceA3a, traceA3b, traceA3c, traceA3d,
  traceA4a, traceA4b, traceA4c, traceA4d,
  traceA5a, traceA5b, traceA5c, traceA5d,

  traceB1a, traceB1b, traceB1c, traceB1d,
  traceB2,
  traceB3a, traceB3b, traceB3c, traceB3d,
  traceB4a, traceB4b, traceB4c, traceB4d,
  traceB5a, traceB5b, traceB5c, traceB5d,

  traceC1, traceC2, traceC3, traceC4, traceC5,

  traceD1, traceD2, traceD3, traceD4, traceD5,

  traceE1, traceE2, traceE3, traceE4, traceE5
} from './plotMatrixTraces.js';

export const plotMatrix = () => {
  
  var data = [
    traceA1,
    traceA2a, traceA2b, traceA2c, traceA2d,
    traceA3a, traceA3b, traceA3c, traceA3d,
    traceA4a, traceA4b, traceA4c, traceA4d,
    traceA5a, traceA5b, traceA5c, traceA5d,

    traceB1a, traceB1b, traceB1c, traceB1d,
    traceB2,
    traceB3a, traceB3b, traceB3c, traceB3d,
    traceB4a, traceB4b, traceB4c, traceB4d,
    traceB5a, traceB5b, traceB5c, traceB5d,

    traceC1, traceC2, traceC3, traceC4, traceC5,

    traceD1, traceD2, traceD3, traceD4, traceD5,

    traceE1, traceE2, traceE3, traceE4, traceE5
  ];

  Plotly.newPlot('matrix-2', data, plotMatrixLayout);
}
