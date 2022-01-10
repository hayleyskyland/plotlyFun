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

export const traceA3 = {
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
  domain: {row: 0, column: 2}
};

// A4

export const traceA4 = {
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
  domain: {row: 0, column: 3}
};

// A5

export const traceA5 = {
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
  domain: {row: 0, column: 4}
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

export const traceB3 = {
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
  domain: {row: 1, column: 2}
};

// B4

export const traceB4 = {
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
  domain: {row: 1, column: 3}
};

// B5

export const traceB5 = {
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
  domain: {row: 1, column: 4}
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

export const traceC4 = {
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
  domain: {row: 2, column: 3}
};

// C5

export const traceC5 = {
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
  domain: {row: 2, column: 4}
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

export const traceD5 = {
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
  domain: {row: 3, column: 4}
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