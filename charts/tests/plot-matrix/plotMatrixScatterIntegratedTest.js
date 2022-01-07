export const plotMatrixScatterIntegratedTest = () => {

  const plotMatrixLayout2 = {
    title: '<b>Title for Scatter Integration Test</b><br>Subtitle Hooray', 
    width: 500,
    height: 500,
    margin: { b: 65 },
    showlegend: false,
    bargap: 0.05, 
    bargroupgap: 0.2, 
    
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
    yaxis5: { ticklen: 0, tickwidth: 0, color: 'white' },
    yaxis6: { ticklen: 0, tickwidth: 0, color: 'white' },
    
  };

  const trace1a = {
    // x: [0, 1, 2],
    y: [1, 2, 3, 4, 5],
    xaxis: 'x1',
    yaxis: 'y1',
    type: 'scatter'
  };
  
  const trace1b = {
    // x: [3, 4, 5],
    y: [2, 2, 5, 4, 6],
    xaxis: 'x1',
    yaxis: 'y1',
    type: 'scatter'
  };
  
  const trace1c = {
    // x: [3, 4, 5],
    y: [1, 1, 2, 8, 8],
    xaxis: 'x1',
    yaxis: 'y1',
    type: 'scatter'
  };

  const trace2 = {
    x: [1, 2, 3],
    y: [4, 5, 6],
    xaxis: 'x2',
    yaxis: 'y2',    
    type: 'histogram',
    marker: { color: 'lightblue' },
  };
  
  const trace3 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x3',
    yaxis: 'y3',
    type: 'histogram',
    marker: { color: 'lightgray' },
  };
  
  const trace4 = {
    x: [20, 30, 40],
    y: [50, 60, 70],
    xaxis: 'x4',
    yaxis: 'y4',
    type: 'histogram',
    marker: { color: '#F5DEB3' },
  };
    
  const data = [
    trace1a, trace1b, trace1c, trace2, trace3, trace4
  ];
  
  
  Plotly.newPlot('matrix-2', data, plotMatrixLayout2);
}
