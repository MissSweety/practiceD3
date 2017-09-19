var margin = {top: 40, right: 40, bottom: 30, left: 40};
var container = {width: 500, height: 400 };
var color = ['#007abe', '#d00111', '#86b31f', '#e8cd05', '#59187c'];

var width = container.width - margin.left - margin.right;
var height = container.height -margin.bottom - margin.top;

var data = [{
  name: 'Leader',
  number: 12,
}, {
  name: 'Sho',
  number: 15,
}, {
  name: 'Aiba',
  number: 18,
},{
  name: 'Nino',
  number: 11,
}, {
  name: 'MJ',
  number: 10,
}];

// x，y轴数据柱形图需要的缩放
var x = d3.scaleBand().range([0, width]).paddingInner(0.5);
var y = d3.scaleLinear().range([height, 0]);

x.domain(data.map(d => d.name));
y.domain([0, d3.max(data, d => d.number)]);

var svg = d3.select('body').append('svg')
  .attr('width', container.width)
  .attr('height', container.height);

var maingroup = svg
  .append('g')
  .attr('transform', `translate(${margin.left},${margin.top})`);

var bargroup = maingroup.selectAll('.bar')
  .data(data)
  .enter()
  .append('rect')
  .attr('class', 'bar')
  .attr('x', d => x(d.name))
  .attr('y', height)
  .attr('width', x.bandwidth())
  .transition()
  .delay(function(d,i){
    return i * 1000;
   })
  .duration(2000)
  .ease(d3.easeBack)
  .attr('y', d=> y(d.number))
  .attr('height', d => height - y(d.number))
  .attr('fill', (d,i) => color[i]);

var title = svg.append('text')
  .attr('class', 'title')
  .attr('x', (width+ margin.right + margin.left)/2)
  .attr('y', margin.top -10)
  .text('most dame arashi in 2008-2015')
  .style('text-anchor', 'middle');

var xAxis = d3.axisBottom().scale(x);
var yAxis = d3.axisLeft().scale(y);

svg.append('g')
  .attr('class', 'axis')
  .attr("transform", `translate(${margin.left},${height + margin.top})`)
  .call(xAxis);

svg.append('g')
  .attr('class', 'axis')
  .attr("transform", `translate(${margin.left}, ${margin.top})`)
  .call(yAxis);

