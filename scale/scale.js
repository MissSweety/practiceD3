const testData = [0, 1, 2, 3, 4, 6, 7.5, 8, 10 ];

const firstScale = d3.scaleLinear()
  .domain([0, 10])
  .range([0, 400]);

const svg = d3.select('svg.linear');
const canvas = svg.append('g').attr('transform', 'translate(10, 10)');

canvas.selectAll('.firstLinear')
  .data(testData)
  .enter()
  .append('circle')
  .attr('class', 'firstLinear')
  .attr('r', 4)
  .attr('cx', d => firstScale(d))
  .attr('cy', 10)
  .attr('fill', 'orange');

canvas.selectAll('.firstText')
  .data(testData)
  .enter()
  .append('text')
  .attr('class', '.firstText')
  .attr('x', d => firstScale(d))
  .attr('y', 30)
  .text(d => d);


const secondScale = d3.scaleLinear()
  .domain([0, 10])
  .range(['purple', 'lightgreen']);

canvas.selectAll('.secondLinear')
  .data(testData)
  .enter()
  .append('circle')
  .attr('class', 'secondLinear')
  .attr('r', 4)
  .attr('cx', d => firstScale(d))
  .attr('cy', 40)
  .attr('fill', d => secondScale(d));


var logScale = d3.scaleLog()
  .domain([10, 100000])
  .range([0, 600]);

const sqrScale = d3.scaleSqrt()
  .domain([0, 10])
  .range([0, 40]);
canvas.selectAll('.thirdLinear')
  .data(testData)
  .enter()
  .append('circle')
  .attr('class', 'thirdLinear')
  .attr('r', d => sqrScale(d))
  .attr('cx', d => firstScale(d))
  .attr('cy', 100)
  .attr('fill', d => secondScale(d));


const fourthScale = d3.scaleLinear()
  .domain([0, 5, 10])
  .range(['purple','white', 'lightgreen']);

canvas.selectAll('.fourthScale')
  .data(testData)
  .enter()
  .append('circle')
  .attr('class', 'fourthScale')
  .attr('r', d => sqrScale(d))
  .attr('cx', d => firstScale(d))
  .attr('cy', 200)
  .attr('fill', d => fourthScale(d));

const fiveScale = d3.scalePoint()
  .domain(['leader', 'sho', 'aiba', 'nino', 'jun'])
  .range([0, 400])
  .padding(0.2);

canvas.selectAll('.five')
  .data(['leader', 'sho', 'aiba', 'nino', 'jun'])
  .enter()
  .append('circle')
  .attr('class', 'five')
  .attr('r', 4)
  .attr('cx', d => fiveScale(d))
  .attr('cy', 300)
  .attr('fill', 'purple');
canvas.selectAll('.fivet')
  .data(['leader', 'sho', 'aiba', 'nino', 'jun'])
  .enter()
  .append('text')
  .attr('class', 'fivet')
  .attr('x', d => fiveScale(d))
  .attr('y', 320)
  .text(d => d);


console.log('test log scale: input-1000  output-',logScale(1000));
