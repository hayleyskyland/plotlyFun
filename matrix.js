export const matrix = () => {

  // variables

  const size = 230;
  const padding = 1;

  const x = d3.scale.linear()
    .range([padding / 2, size - padding / 2]);

  const y = d3.scale.linear()
    .range([size - padding / 2, padding / 2]);

  const xAxis = d3.svg.axis()
    .scale(x)
    .orient('top') // top axis labels (not showing up)
    .ticks(6); // how many labels

  const yAxis = d3.svg.axis()
    .scale(y)
    .orient('left') // left axis labels
    .ticks(6); // how many labels

  const color = d3.scale.category20();

  // display function

  d3.csv('batches.csv', function(error, data) {
    if (error) throw error;

    const domainByTrait = {},
        traits = d3.keys(data[0]).filter(function(d) { return d !== 'species'; }),
        n = traits.length;

    traits.forEach(function(trait) {
      domainByTrait[trait] = d3.extent(data, function(d) { return d[trait]; });
    });

    xAxis.tickSize(size * n);
    yAxis.tickSize(-size * n);

    const brush = d3.svg.brush()
      .x(x)
      .y(y)

    const svg = d3.select('body').append('svg')
      .attr('width', size * n + padding)
      .attr('height', size * n + padding)
      .attr('class', 'matrix') // add html class to axis labels
      .append('g')
      .attr('transform', 'translate(' + 55 + ',' + padding / 2 + ')')

    svg.selectAll('.x.axis')
      .data(traits)
      .enter().append('g')
      .attr('class', 'x axis')
      .attr('transform', function(d, i) { return 'translate(' + (n - i - 1) * size + ',0)'; })
      .each(function(d) { x.domain(domainByTrait[d]); d3.select(this).call(xAxis); });

    svg.selectAll('.y.axis')
      .data(traits)
      .enter().append('g')
      .attr('class', 'y axis')
      .attr('transform', function(d, i) { return 'translate(0,' + i * size + ')'; })
      .each(function(d) { y.domain(domainByTrait[d]); d3.select(this).call(yAxis); }); // left axis show up

    const cell = svg.selectAll('.cell')
      .data(cross(traits, traits))
      .enter().append('g')
      .attr("fill", "white")
      .attr('transform', function(d) { return 'translate(' + (n - d.i - 1) * size + ',' + d.j * size + ')'; })
      .each(plot);

    // dots

    function plot(p) {
      const cell = d3.select(this);

      x.domain(domainByTrait[p.x]);
      y.domain(domainByTrait[p.y]);

      cell.append('rect')
        .attr('class', 'frame')
        .attr('width', size - padding)
        .attr('height', size - padding);

      cell.selectAll('circle')
        .data(data)
        .enter().append('circle')
        .attr('cx', function(d) { return x(d[p.x]); })
        .attr('cy', function(d) { return y(d[p.y]); })
        .attr('r', 4) // dot size
        .style('fill', function(d) { return color(d.batch); }) // dot color
    }

    function cross(a, b) {
      let c = [], n = a.length, m = b.length, i, j;
      for (i = -1; ++i < n;) for (j = -1; ++j < m;) c.push({x: a[i], i: i, y: b[j], j: j});
      return c;
    }
  }) 
}