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
      marker: { color: 'lightblue' },
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



// matrix

const matrix = () => {

  // variables

  var width = 960,
  size = 230,
  padding = 20;

  var x = d3.scale.linear()
    .range([padding / 2, size - padding / 2]);

  var y = d3.scale.linear()
    .range([size - padding / 2, padding / 2]);

  var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom")
    .ticks(6);

  var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(6);

  var color = d3.scale.category10();

  // display function

  d3.csv("flowers.csv", function(error, data) {
    if (error) throw error;

    var domainByTrait = {},
        traits = d3.keys(data[0]).filter(function(d) { return d !== "species"; }),
        n = traits.length;

    traits.forEach(function(trait) {
      domainByTrait[trait] = d3.extent(data, function(d) { return d[trait]; });
    });

    xAxis.tickSize(size * n);
    yAxis.tickSize(-size * n);

    var brush = d3.svg.brush()
      .x(x)
      .y(y)
      .on("brushstart", brushstart)
      .on("brush", brushmove)
      .on("brushend", brushend);

    var svg = d3.select("body").append("svg")
      .attr("width", size * n + padding)
      .attr("height", size * n + padding)
      .append("g")
      .attr("transform", "translate(" + padding + "," + padding / 2 + ")");

    svg.selectAll(".x.axis")
      .data(traits)
      .enter().append("g")
      .attr("class", "x axis")
      .attr("transform", function(d, i) { return "translate(" + (n - i - 1) * size + ",0)"; })
      .each(function(d) { x.domain(domainByTrait[d]); d3.select(this).call(xAxis); });

    svg.selectAll(".y.axis")
      .data(traits)
      .enter().append("g")
      .attr("class", "y axis")
      .attr("transform", function(d, i) { return "translate(0," + i * size + ")"; })
      .each(function(d) { y.domain(domainByTrait[d]); d3.select(this).call(yAxis); });

    var cell = svg.selectAll(".cell")
      .data(cross(traits, traits))
      .enter().append("g")
      .attr("class", "cell")
      .attr("transform", function(d) { return "translate(" + (n - d.i - 1) * size + "," + d.j * size + ")"; })
      .each(plot);

    // Titles for the diagonal.

    cell.filter(function(d) { return d.i === d.j; }).append("text")
      .attr("x", padding)
      .attr("y", padding)
      .attr("dy", ".71em")
      .text(function(d) { return d.x; });

    cell.call(brush);

    function plot(p) {
      var cell = d3.select(this);

      x.domain(domainByTrait[p.x]);
      y.domain(domainByTrait[p.y]);

      cell.append("rect")
        .attr("class", "frame")
        .attr("x", padding / 2)
        .attr("y", padding / 2)
        .attr("width", size - padding)
        .attr("height", size - padding);

      cell.selectAll("circle")
        .data(data)
        .enter().append("circle")
        .attr("cx", function(d) { return x(d[p.x]); })
        .attr("cy", function(d) { return y(d[p.y]); })
        .attr("r", 4)
        .style("fill", function(d) { return color(d.species); });
    }

    var brushCell;

    // clear the previously-active brush, if any

    function brushstart(p) {
      if (brushCell !== this) {
        d3.select(brushCell).call(brush.clear());
        x.domain(domainByTrait[p.x]);
        y.domain(domainByTrait[p.y]);
        brushCell = this;
      }
    }

    // highlight the selected circles

    function brushmove(p) {
      var e = brush.extent();
      svg.selectAll("circle").classed("hidden", function(d) {
        return e[0][0] > d[p.x] || d[p.x] > e[1][0]
            || e[0][1] > d[p.y] || d[p.y] > e[1][1];
      });
    }

    // if the brush is empty, select all circles

    function brushend() {
      if (brush.empty()) svg.selectAll(".hidden").classed("hidden", false);
    }

    function cross(a, b) {
      var c = [], n = a.length, m = b.length, i, j;
      for (i = -1; ++i < n;) for (j = -1; ++j < m;) c.push({x: a[i], i: i, y: b[j], j: j});
      return c;
    }

  }) 
}






// invocations

histogram()
scatter()
matrix()