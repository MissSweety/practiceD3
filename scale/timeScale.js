const aaa = d3.select('svg.time');
const canvasa = aaa.append('g').attr('transform', 'translate(50, 10)');

const timescale = d3.scaleTime()
  .domain([new Date(2017, 7, 1), new Date(2017, 9, 1)])
  .range([0, 600]);

const colorScale = d3.scaleTime()
  .domain([new Date(2017, 7, 1), new Date(2017, 9, 1)])
  .range(['blue', 'red']);

const infor = timescale.ticks(d3.timeDay.every(10));

canvasa.selectAll('.timeTest')
  .data(infor)
  .enter()
  .append('circle')
  .attr('class', 'timeTest')
  .attr('r', 4)
  .attr('cx', d=>timescale(d))
  .attr('cy', 20);

canvasa.selectAll('.timetext')
  .data(infor)
  .enter()
  .append('text')
  .attr('class', 'timetext')
  .attr('x', d=>timescale(d))
  .attr('y', 50)
  .attr('fill', d => colorScale(d))
  .text(d => d3.timeFormat("%B %d")(d));
  