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
    .orient('bottom')
    .ticks(6);

  const yAxis = d3.svg.axis()
    .scale(y)
    .orient('left')
    .ticks(6);

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
      .on('brushstart', brushstart)
      .on('brush', brushmove)
      .on('brushend', brushend);

    const svg = d3.select('body').append('svg')
      .attr('width', size * n + padding)
      .attr('height', size * n + padding)
      .attr('class', 'matrix')
      .append('g')
      .attr('transform', 'translate(' + padding + ',' + padding / 2 + ')')

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
      .each(function(d) { y.domain(domainByTrait[d]); d3.select(this).call(yAxis); });

    const cell = svg.selectAll('.cell')
      .data(cross(traits, traits))
      .enter().append('g')
      .attr("fill", "white")
      .attr('class', 'matrix')
      .attr('class', 'cell')
      .attr('transform', function(d) { return 'translate(' + (n - d.i - 1) * size + ',' + d.j * size + ')'; })
      .each(plot);

    // titles for diagonal

    cell.filter(function(d) { return d.i === d.j; }).append('text')
      .attr('x', padding)
      .attr('y', padding)
      .attr('dy', '.71em')
      .text(function(d) { return d.x; });

    cell.call(brush);

    function plot(p) {
      const cell = d3.select(this);

      x.domain(domainByTrait[p.x]);
      y.domain(domainByTrait[p.y]);

      cell.append('rect')
        .attr('class', 'frame')
        .attr('x', padding / 2)
        .attr('y', padding / 2)
        .attr('width', size - padding)
        .attr('height', size - padding);

      cell.selectAll('circle')
        .data(data)
        .enter().append('circle')
        .attr('cx', function(d) { return x(d[p.x]); })
        .attr('cy', function(d) { return y(d[p.y]); })
        .attr('r', 4)
        .style('fill', function(d) { return color(d.species); })
        // .style('background-color', 'white');
    }

    let brushCell;

    // clear previously-active brush (if any)

    function brushstart(p) {
      if (brushCell !== this) {
        d3.select(brushCell).call(brush.clear());
        x.domain(domainByTrait[p.x]);
        y.domain(domainByTrait[p.y]);
        brushCell = this;
      }
    }

    // highlight selected circles

    function brushmove(p) {
      const e = brush.extent();
      svg.selectAll('circle').classed('hidden', function(d) {
        return e[0][0] > d[p.x] || d[p.x] > e[1][0]
            || e[0][1] > d[p.y] || d[p.y] > e[1][1];
      });
    }

    // if the brush empty, select all circles

    function brushend() {
      if (brush.empty()) svg.selectAll('.hidden').classed('hidden', false);
    }

    function cross(a, b) {
      let c = [], n = a.length, m = b.length, i, j;
      for (i = -1; ++i < n;) for (j = -1; ++j < m;) c.push({x: a[i], i: i, y: b[j], j: j});
      return c;
    }
  }) 
}