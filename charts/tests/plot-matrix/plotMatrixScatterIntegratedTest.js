export const plotMatrixScatterIntegratedTest = () => {

  const plotMatrixLayout2 = {
    title: '<b>Title for Scatter Integration Test</b><br>Subtitle Hooray', 
    width: 500,
    height: 500,
    margin: { b: 65 },
    showlegend: false,
    
    grid: {
      rows: 2,
      columns: 2,
      pattern: 'independent',
      xgap: .1,
      ygap: .1,
    },
  
    xaxis1: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis2: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis2: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis3: { ticklen: 0, tickwidth: 0, color: 'white' },
    xaxis4: { ticklen: 0, tickwidth: 0, color: 'white' },

    yaxis1: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis2: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis3: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis4: { ticklen: 0, tickwidth: 0, color: 'white' },
  };
  
  const trace1 = {
    x: [1, 2, 3],
    y: [4, 5, 6],
    xaxis: 'x1',
    yaxis: 'y1',    
    type: 'scatter',
    marker: { color: 'plum' },
  };
  
  const trace2 = {
    x: [1, 2, 3],
    y: [4, 5, 6],
    xaxis: 'x2',
    yaxis: 'y2',    
    type: 'scatter',
    marker: { color: 'lightblue' },
  };
  
  const trace3 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x3',
    yaxis: 'y3',
    type: 'scatter',
    marker: { color: 'lightgray' },
  };
  
  const trace4 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x4',
    yaxis: 'y4',
    type: 'scatter',
    marker: { color: '#F5DEB3' },
  };
    
  const data = [
    trace1, trace2, trace3, trace4
  ];
  
  
  Plotly.newPlot('matrix-2', data, plotMatrixLayout2);
}
