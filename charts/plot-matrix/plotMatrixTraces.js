// row A

const y1 = [1, 2, 3, 4, 5];
const y2 = [2, 2, 5, 4, 6];
const y3 = [1, 1, 2, 8, 8];

const avg = (i) => {
  const sum = y1[i] + y2[i] + y3[i];
  return sum / 3;
}

const mid = () => {
  const sum = avg(0) + avg(4)
  return sum / 2;
}

const midA = () => {
  const sum = avg(0) + mid()
  return sum / 2;
}

const midB = () => {
  const sum = mid() + avg(4)
  return sum / 2;
}

const yAvg = [avg(0), midA(), mid(), midB(), avg(4)]

// row A

// A1

export const traceA1 = {
  x: [1, 2, 3, 4, 5],
  y: [5, 7, 5, 3, 6],
  xaxis: 'x1',
  yaxis: 'y1',    
  type: 'histogram',
  mode: 'markers',
  marker: { color: 'lightblue' },
};

// A2

// export const traceA2a = {
//   y: y1,
//   xaxis: 'x2',
//   yaxis: 'y2',
//   type: 'scatter',
//   mode: 'markers',
//   marker: { color: 'pink' }
// };

// export const traceA2b = {
//   y: y2,
//   xaxis: 'x2',
//   yaxis: 'y2',
//   type: 'scatter',
//   mode: 'markers',
//   marker: { color: 'plum' }
// };

// export const traceA2c = {
//   y: y3,
//   xaxis: 'x2',
//   yaxis: 'y2',
//   type: 'scatter',
//   mode: 'markers',
//   marker: { color: 'lightblue' }
// };

// export const traceA2d = {
//   y: yAvg,
//   xaxis: 'x2',
//   yaxis: 'y2',
//   type: 'scatter',
//   mode: 'lines',
//   marker: { color: 'lightgray' }
// };














export const traceA2 = {
  type: 'table',
  header: {
    values: ['1.23'],
    align: 'center',
    height: '60',
    line: {width: 1, color: '#F5DEB3'},
    height: 170,
    font: {size: 26, color: 'plum'},
    style: {margin: 10000}
  },
  domain: {row: 0, column: 1}
};

















// A3

export const traceA3a = {
  y: y1,
  xaxis: 'x3',
  yaxis: 'y3',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceA3b = {
  y: y2,
  xaxis: 'x3',
  yaxis: 'y3',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceA3c = {
  y: y3,
  xaxis: 'x3',
  yaxis: 'y3',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceA3d = {
  y: yAvg,
  xaxis: 'x3',
  yaxis: 'y3',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// A4

export const traceA4a = {
  y: y1,
  xaxis: 'x4',
  yaxis: 'y4',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceA4b = {
  y: y2,
  xaxis: 'x4',
  yaxis: 'y4',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceA4c = {
  y: y3,
  xaxis: 'x4',
  yaxis: 'y4',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceA4d = {
  y: yAvg,
  xaxis: 'x4',
  yaxis: 'y4',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// A5

export const traceA5a = {
  y: y1,
  xaxis: 'x5',
  yaxis: 'y5',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceA5b = {
  y: y2,
  xaxis: 'x5',
  yaxis: 'y5',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceA5c = {
  y: y3,
  xaxis: 'x5',
  yaxis: 'y5',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceA5d = {
  y: yAvg,
  xaxis: 'x5',
  yaxis: 'y5',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// row B

// B1

export const traceB1a = {
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
  y: yAvg,
  xaxis: 'x6',
  yaxis: 'y6',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// B2

export const traceB2 = {
  x: [20, 30, 40, 20, 10],
  y: [50, 60, 70, 5, 50],
  xaxis: 'x7',
  yaxis: 'y7',
  type: 'histogram',
  marker: { color: 'pink' },
};

// B3

export const traceB3a = {
  y: y1,
  xaxis: 'x8',
  yaxis: 'y8',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceB3b = {
  y: y2,
  xaxis: 'x8',
  yaxis: 'y8',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceB3c = {
  y: y3,
  xaxis: 'x8',
  yaxis: 'y8',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceB3d = {
  y: yAvg,
  xaxis: 'x8',
  yaxis: 'y8',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// B4

export const traceB4a = {
  y: y1,
  xaxis: 'x9',
  yaxis: 'y9',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceB4b = {
  y: y2,
  xaxis: 'x9',
  yaxis: 'y9',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceB4c = {
  y: y3,
  xaxis: 'x9',
  yaxis: 'y9',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceB4d = {
  y: yAvg,
  xaxis: 'x9',
  yaxis: 'y9',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// B5

export const traceB5a = {
  y: y1,
  xaxis: 'x10',
  yaxis: 'y10',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceB5b = {
  y: y2,
  xaxis: 'x10',
  yaxis: 'y10',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceB5c = {
  y: y3,
  xaxis: 'x10',
  yaxis: 'y10',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceB5d = {
  y: yAvg,
  xaxis: 'x10',
  yaxis: 'y10',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// row C

// C1

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
  y: yAvg,
  xaxis: 'x11',
  yaxis: 'y11',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// C2

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
  y: yAvg,
  xaxis: 'x12',
  yaxis: 'y12',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// C3

export const traceC3 = {
  x: [20, 30, 40, 50, 60],
  y: [50, 60, 70, 80, 90],
  xaxis: 'x13',
  yaxis: 'y13',
  type: 'histogram',
  marker: { color: 'lightblue' },
};

// C4

export const traceC4a = {
  y: y1,
  xaxis: 'x14',
  yaxis: 'y14',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceC4b = {
  y: y2,
  xaxis: 'x14',
  yaxis: 'y14',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceC4c = {
  y: y3,
  xaxis: 'x14',
  yaxis: 'y14',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceC4d = {
  y: yAvg,
  xaxis: 'x14',
  yaxis: 'y14',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// C5

export const traceC5a = {
  y: y1,
  xaxis: 'x15',
  yaxis: 'y15',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceC5b = {
  y: y2,
  xaxis: 'x15',
  yaxis: 'y15',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceC5c = {
  y: y3,
  xaxis: 'x15',
  yaxis: 'y15',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceC5d = {
  y: yAvg,
  xaxis: 'x15',
  yaxis: 'y15',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// row D

// d1

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
  y: yAvg,
  xaxis: 'x16',
  yaxis: 'y16',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// d2

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
  y: yAvg,
  xaxis: 'x17',
  yaxis: 'y17',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// d3

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
  y: yAvg,
  xaxis: 'x18',
  yaxis: 'y18',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// d4

export const traceD4 = {
  x: [20, 30, 40, 30, 10],
  y: [50, 60, 70, 60, 10],
  xaxis: 'x19',
  yaxis: 'y19',
  type: 'histogram',
  marker: { color: 'pink' },
};

// d5

export const traceD5a = {
  y: y1,
  xaxis: 'x20',
  yaxis: 'y20',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceD5b = {
  y: y2,
  xaxis: 'x20',
  yaxis: 'y20',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceD5c = {
  y: y3,
  xaxis: 'x20',
  yaxis: 'y20',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceD5d = {
  y: yAvg,
  xaxis: 'x20',
  yaxis: 'y20',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// row E

// e1

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
  y: yAvg,
  xaxis: 'x21',
  yaxis: 'y21',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// e2

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
  y: yAvg,
  xaxis: 'x22',
  yaxis: 'y22',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// e3

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
  y: yAvg,
  xaxis: 'x23',
  yaxis: 'y23',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// e4

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
  y: yAvg,
  xaxis: 'x24',
  yaxis: 'y24',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};

// e5

export const traceE5 = {
  x: [20, 30, 40, 10, 10],
  y: [50, 60, 70, 10, 20],
  xaxis: 'x25',
  yaxis: 'y25',
  type: 'histogram',
  marker: { color: 'lightblue' },
};