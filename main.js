// histogram

const histogram = () => {
  const xTotal = ['Kitties', 'Kitties', 'Kitties', 'Bunnies', 'Bunnies', 'Tanks', 'Tanks', 'Tanks', 'Tanks', 'Tanks']
  const xCurrent = ['Kitties', 'Kitties', 'Tanks']

  const trace = [
    {
      name: 'Total',
      x: xTotal,
      type: 'histogram',
      marker: { color: 'pink' },
    },
    {
      name: 'Current',
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
    xaxis: {title: 'Animals'}, 
    yaxis: {title: 'Quantity'},
    width: 500,
    height: 500,
  };

  Plotly.newPlot('histogram', data, layout);

}




// scatter

const scatter = () => {
  const x1 = [1, 2, 3, 4, 5];
  const x2 = [2, 2, 5, 4, 6];
  const x3 = [1, 1, 2, 8, 8];

  const avg = (i) => {
    const sum = x1[i] + x2[i] + x3[i];
    return sum / 3;
  }

  const xAvg = [avg(0), avg(1), avg(2), avg(3), avg(4)]

  const trace = [
    {
      name: '1st Run',
      mode: 'markers',
      x: x1,
      type: 'scatter',
      marker: { color: 'pink' },
    },
    {
      name: '2nd Run',
      mode: 'markers',
      x: x2,
      type: 'scatter',
      marker: { color: 'plum' },
    },
    {
      name: '3rd Run',
      mode: 'markers',
      x: x3,
      type: 'scatter',
      marker: { color: 'lightblue' },
    },
    {
      name: 'Average',
      mode: 'line',
      x: xAvg,
      type: 'scatter',
      marker: { color: 'lightgray' },
    }
  ]

  const data = trace;

  const layout = {
    title: 'Scatter Test', 
    xaxis: {title: 'Days'}, 
    yaxis: {title: 'Quantity'},
    width: 500,
    height: 500,
  };

  Plotly.newPlot('scatter', data, layout);
}





// invocations

histogram()
scatter()