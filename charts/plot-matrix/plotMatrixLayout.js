const xLayout = {
  color: 'white',
  linecolor: 'cadetblue',
  mirror: true,
}

const yLayout = {
  color: 'white',
  linecolor: 'cadetblue',
}

export const plotMatrixLayout = {
  
  title: {
    text: '<b>Title for Matrix Test</b><br>Subtitle for Matrix Test',
    font: {
      color: 'cadetblue',
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

  xaxis1: xLayout,
  yaxis1: yLayout,
  
  // B

  // b1

  xaxis6: xLayout,
  yaxis6: yLayout,
  
  // b2

  xaxis7: xLayout,
  yaxis7: yLayout,
  
  // C

  // c1

  xaxis11: xLayout,
  yaxis11: yLayout,
  
  // c2

  xaxis12: xLayout,
  yaxis12: yLayout,
  
  // c3

  xaxis13: xLayout,
  yaxis13: yLayout,
  
  // D

  // d1

  xaxis16: xLayout,
  yaxis16: yLayout,
  
  // d2

  xaxis17: xLayout,
  yaxis17: yLayout,
  
  // d3

  xaxis18: xLayout,
  yaxis18: yLayout,
  
  // d4

  xaxis19: xLayout,
  yaxis19: yLayout,
  
  // E

  // e1

  xaxis21: xLayout,
  yaxis21: yLayout,
  
  // e2

  xaxis22: xLayout,
  yaxis22: yLayout,
  
  // e3

  xaxis23: xLayout,
  yaxis23: yLayout,

  // e4

  xaxis24: xLayout,
  yaxis24: yLayout,

  // e5

  xaxis25: xLayout,
  yaxis25: xLayout
}