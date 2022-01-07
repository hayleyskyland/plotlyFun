export const plotMatrixScatterTest = () => {

  const trace1 = {
    x: [0, 1, 2],
    y: [10, 15, 1],
    type: 'scatter'
  };
  
  const trace2 = {
    x: [2, 3, 4],
    y: [10, 11, 12],
    yaxis: 'y1',
    type: 'scatter'
  };
  
  const trace3 = {
    x: [3, 4, 5],
    y: [23, 1, 10],
    yaxis: 'y1',
    type: 'scatter'
  };
  
  const data = [trace1, trace2, trace3];
  
  Plotly.newPlot('matrix', data);

}