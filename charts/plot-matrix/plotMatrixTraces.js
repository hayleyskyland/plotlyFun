// row A

const y1 = [1, 2, 3, 4, 5];
const y2 = [2, 2, 5, 4, 6];
const y3 = [1, 1, 2, 8, 8];

const avg = (i) => {
  const sum = y1[i] + y2[i] + y3[i];
  return sum / 3;
}

const yAvg = [avg(0), avg(1), avg(2), avg(3), avg(4)]

// A1

export const traceA1 = {
  x: [1, 2, 3],
  y: [4, 5, 6],
  xaxis: 'x1',
  yaxis: 'y1',    
  type: 'histogram',
  marker: { color: 'plum' },
};

// A2

export const traceA2a = {
  y: y1,
  xaxis: 'x2',
  yaxis: 'y2',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'pink' }
};

export const traceA2b = {
  y: y2,
  xaxis: 'x2',
  yaxis: 'y2',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'plum' }
};

export const traceA2c = {
  y: y3,
  xaxis: 'x2',
  yaxis: 'y2',
  type: 'scatter',
  mode: 'markers',
  marker: { color: 'lightblue' }
};

export const traceA2d = {
  y: yAvg,
  xaxis: 'x2',
  yaxis: 'y2',
  type: 'scatter',
  marker: { color: 'lightgray' }
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
  marker: { color: 'lightgray' }
};

// A4

export const traceA4 = {
  x: [20, 30, 40],
  y: [50, 60, 70],
  xaxis: 'x4',
  yaxis: 'y4',
  type: 'scatter',
  marker: { color: '#F5DEB3' },
};

export const traceA5 = {
  x: [20, 30, 40],
  y: [50, 60, 70],
  xaxis: 'x5',
  yaxis: 'y5',
  type: 'scatter',
  marker: { color: 'pink' },
};  

// row B

export const traceB1 = {
  x: [300, 400, 500],
  y: [600, 700, 800],
  xaxis: 'x6',
  yaxis: 'y6',
  type: 'scatter',
  marker: { color: 'lightblue' },
};

export const traceB2 = {
  x: [4000, 5000, 6000],
  y: [7000, 8000, 9000],
  xaxis: 'x7',
  yaxis: 'y7',
  type: 'histogram',
  marker: { color: 'lightgray' },
};

export const traceB3 = {
  x: [4000, 5000, 6000],
  y: [7000, 8000, 9000],
  xaxis: 'x8',
  yaxis: 'y8',
  type: 'scatter',
  marker: { color: '#F5DEB3' },
};

export const traceB4 = {
  x: [4000, 5000, 6000],
  y: [7000, 8000, 9000],
  xaxis: 'x9',
  yaxis: 'y9',
  type: 'scatter',
  marker: { color: 'pink' },
};

export const traceB5 = {
  x: [4000, 5000, 6000],
  y: [7000, 8000, 9000],
  xaxis: 'x10',
  yaxis: 'y10',
  type: 'scatter',
  marker: { color: 'plum' },
};

// row C

export const traceC1 = {
  x: [1, 2, 3],
  y: [4, 5, 6],
  xaxis: 'x11',
  yaxis: 'y11',    
  type: 'scatter',
  marker: { color: 'lightgray' },
};

export const traceC2 = {
  x: [20, 30, 40],
  y: [50, 60, 70],
  xaxis: 'x12',
  yaxis: 'y12',
  type: 'scatter',
  marker: { color: '#F5DEB3' },
};

export const traceC3 = {
  x: [20, 30, 40],
  y: [50, 60, 70],
  xaxis: 'x13',
  yaxis: 'y13',
  type: 'histogram',
  marker: { color: 'pink' },
};

export const traceC4 = {
  x: [20, 30, 40],
  y: [50, 60, 70],
  xaxis: 'x14',
  yaxis: 'y14',
  type: 'scatter',
  marker: { color: 'plum' },
};

export const traceC5 = {
  x: [20, 30, 40],
  y: [50, 60, 70],
  xaxis: 'x15',
  yaxis: 'y15',
  type: 'scatter',
  marker: { color: 'lightblue' },
};

// row D

export const traceD1 = {
  x: [1, 2, 3],
  y: [4, 5, 6],
  xaxis: 'x16',
  yaxis: 'y16',    
  type: 'scatter',
  marker: { color: '#F5DEB3' },
};

export const traceD2 = {
  x: [20, 30, 40],
  y: [50, 60, 70],
  xaxis: 'x17',
  yaxis: 'y17',
  type: 'scatter',
  marker: { color: 'pink' },
};

export const traceD3 = {
  x: [20, 30, 40],
  y: [50, 60, 70],
  xaxis: 'x18',
  yaxis: 'y18',
  type: 'scatter',
  marker: { color: 'plum' },
};

export const traceD4 = {
  x: [20, 30, 40],
  y: [50, 60, 70],
  xaxis: 'x19',
  yaxis: 'y19',
  type: 'histogram',
  marker: { color: 'lightblue' },
};

export const traceD5 = {
  x: [20, 30, 40],
  y: [50, 60, 70],
  xaxis: 'x20',
  yaxis: 'y20',
  type: 'scatter',
  marker: { color: 'lightgray' },
};

// row E

export const traceE1 = {
  x: [1, 2, 3],
  y: [4, 5, 6],
  xaxis: 'x21',
  yaxis: 'y21',    
  type: 'scatter',
  marker: { color: 'pink' },
};

export const traceE2 = {
  x: [20, 30, 40],
  y: [50, 60, 70],
  xaxis: 'x22',
  yaxis: 'y22',
  type: 'scatter',
  marker: { color: 'plum' },
};

export const traceE3 = {
  x: [20, 30, 40],
  y: [50, 60, 70],
  xaxis: 'x23',
  yaxis: 'y23',
  type: 'scatter',
  marker: { color: 'lightblue' },
};

export const traceE4 = {
  x: [20, 30, 40],
  y: [50, 60, 70],
  xaxis: 'x24',
  yaxis: 'y24',
  type: 'scatter',
  marker: { color: 'lightgray' },
};

export const traceE5 = {
  x: [20, 30, 40],
  y: [50, 60, 70],
  xaxis: 'x25',
  yaxis: 'y25',
  type: 'histogram',
  marker: { color: '#F5DEB3' },
};