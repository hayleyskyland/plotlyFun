export const plotMatrixTest = () => {

  const trace1 = {
    x: [1, 2, 3],
    y: [4, 5, 6],
    type: 'scatter'
  };
  
  const trace2 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x2',
    yaxis: 'y2',
    type: 'scatter'
  };
  
  const trace3 = {
    x: [300, 400, 500],
    y: [600, 700, 800],
    xaxis: 'x3',
    yaxis: 'y3',
    type: 'scatter'
  };
  
  const trace4 = {
    x: [4000, 5000, 6000],
    y: [7000, 8000, 9000],
    xaxis: 'x4',
    yaxis: 'y4',
    type: 'scatter'
  };
  
  const data = [trace1, trace2, trace3, trace4];
  
  const layout = {
    grid: {rows: 2, columns: 2, pattern: 'independent'},
  };
  
  Plotly.newPlot('matrix-2', data, layout);

}