// averages

const avg = (i) => {
  const sum = y1[i] + y2[i] + y3[i];
  return sum / 3;
}

const mid = () => {
  const sum = avg(0) + avg(19);
  return sum / 2;
}

const midA = () => {
  const sum = avg(0) + mid()
  return sum / 2;
}

const midB = () => {
  const sum = mid() + avg(19);
  return sum / 2;
}

const yAvg = [avg(0), midA(), mid(), midB(), avg(19)]

// line for avg without dots

export const traceE4d = {
  // y: yAvg,
  xaxis: 'x24',
  yaxis: 'y24',
  type: 'scatter',
  mode: 'lines',
  marker: { color: 'lightgray' }
};