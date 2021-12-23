// histogram

const histogram = () => {
  const xTotal = ['Kitties', 'Kitties', 'Kitties', 'Bunnies', 'Bunnies', 'Tanks', 'Tanks', 'Tanks', 'Tanks', 'Tanks']
  const xCurrent = ['Kitties', 'Kitties', 'Tanks']

  const trace = [
    {
      name: "Total",
      x: xTotal,
      type: 'histogram',
      marker: { color: 'pink' },
    },
    {
      name: "Current",
      x: xCurrent,
      type: 'histogram',
      marker: { color: 'lightgray' },
    }
  ]

  const data = trace;

  const layout = {
    bargap: 0.05, 
    bargroupgap: 0.2, 
    title: 'Histogram Test', 
    xaxis: {title: 'Time'}, 
    yaxis: {title: 'Quantity'},
    width: 500,
    height: 500,
  };

  Plotly.newPlot('histogram', data, layout);

}




// scatter

const scatter = () => {
  const x = [1, 2, 3, 4, 5]
  const y = [50, 24, 53, 2, 1]

  const trace = [
    {
      name: "Current",
      x: x,
      y: y,
      type: 'scatter',
      marker: { color: 'pink' },
    },
    {
      name: "Total",
      x: x,
      y: y,
      type: 'scatter',
      marker: { color: 'lightgray' },
    }
  ]

  const data = trace;

  const layout = {
    bargap: 0.05, 
    bargroupgap: 0.2, 
    title: 'Scatter Test', 
    xaxis: {title: 'Time'}, 
    yaxis: {title: 'Quantity'},
    width: 500,
    height: 500,
  };

  Plotly.newPlot('scatter', data, layout);
}





// invocations

histogram()
scatter()