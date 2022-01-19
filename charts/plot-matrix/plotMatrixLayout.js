// borders

const borderMirror = {
  linecolor: 'lightgray',
  mirror: true,
  showgrid: false,
  showticklabels: false
}

const border = {
  linecolor: 'lightgray',
  showgrid: false,
  zeroline: false,
  showticklabels: false
}

// layout

export const plotMatrixLayout = {

  // hovermode: 'x',
  
  title: {
    text: '<b>Plotly Matrix</b><br>Made With Test Data',
    font: {
      color: '#8A7090',
      size: 30
    }
  },
  
  width: 1034,
  height: 1034,
  margin: { l: 70, r: 70, b: 70, t: 130},
  showlegend: false,

  bargap: 0.05, 
  bargroupgap: 0.2, 

  grid: {
    rows: 5,
    columns: 5,
    pattern: 'independent',
    xgap: 0,
    ygap: 0
  },

  // A

  // a1

  xaxis1: borderMirror,
  yaxis1: border,
  
  // B

  // b1

  xaxis6: border,
  yaxis6: border,
  
  // b2

  xaxis7: borderMirror,
  yaxis7: border,
  
  // C

  // c1

  xaxis11: border,
  yaxis11: border,
  
  // c2

  xaxis12: border,
  yaxis12: border,
  
  // c3

  xaxis13: borderMirror,
  yaxis13: border,
  
  // D

  // d1

  xaxis16: border,
  yaxis16: border,
  
  // d2

  xaxis17: border,
  yaxis17: border,
  
  // d3

  xaxis18: border,
  yaxis18: border,
  
  // d4

  xaxis19: borderMirror,
  yaxis19: border,
  
  // E

  // e1

  xaxis21: border,
  yaxis21: border,
  
  // e2

  xaxis22: border,
  yaxis22: border,
  
  // e3

  xaxis23: border,
  yaxis23: border,

  // e4

  xaxis24: border,
  yaxis24: border,

  // e5

  xaxis25: borderMirror,
  yaxis25: borderMirror
}