export const plotMatrixScatterIntegratedTest = () => {

  const y1 = [1, 2, 3, 4, 5];
  const y2 = [2, 2, 5, 4, 6];
  const y3 = [1, 1, 2, 8, 8];

  const avg = (i) => {
    const sum = y1[i] + y2[i] + y3[i];
    return sum / 3;
  }

  const yAvg = [avg(0), avg(1), avg(2), avg(3), avg(4)]
  
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
    y: y1,
    xaxis: 'x1',
    yaxis: 'y1',
    type: 'scatter',
    mode: 'markers',
    marker: { color: 'pink' }
  };
  
  const trace1b = {
    // x: [3, 4, 5],
    y: y2,
    xaxis: 'x1',
    yaxis: 'y1',
    type: 'scatter',
    mode: 'markers',
    marker: { color: 'plum' }
  };
  
  const trace1c = {
    // x: [3, 4, 5],
    y: y3,
    xaxis: 'x1',
    yaxis: 'y1',
    type: 'scatter',
    mode: 'markers',
    marker: { color: 'lightblue' }
  };

  const trace1d = {
    // x: [3, 4, 5],
    y: yAvg,
    xaxis: 'x1',
    yaxis: 'y1',
    type: 'scatter',
    marker: { color: 'lightgray' }
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
    trace1a, trace1b, trace1c, trace1d, trace2, trace3, trace4
  ];
  
  
  Plotly.newPlot('matrix-2', data, plotMatrixLayout2);
}
