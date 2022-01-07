export const scatter = () => {
  const y1 = [1, 2, 3, 4, 5];
  const y2 = [2, 2, 5, 4, 6];
  const y3 = [1, 1, 2, 8, 8];

  const avg = (i) => {
    const sum = y1[i] + y2[i] + y3[i];
    return sum / 3;
  }

  const yAvg = [avg(0), avg(1), avg(2), avg(3), avg(4)]

  const trace = [
    {
      name: '1st Run',
      mode: 'markers',
      y: y1,
      type: 'scatter',
      marker: { color: 'pink' },
    },
    {
      name: '2nd Run',
      mode: 'markers',
      y: y2,
      type: 'scatter',
      marker: { color: 'plum' },
    },
    {
      name: '3rd Run',
      mode: 'markers',
      y: y3,
      type: 'scatter',
      marker: { color: 'lightblue' },
    },
    {
      name: 'Average',
      mode: 'lines',
      y: yAvg,
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