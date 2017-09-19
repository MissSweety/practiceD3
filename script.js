const horizonBar = (xDist, yDist) =>
  `M${10 + xDist},${8 + yDist}L${14 + xDist},${4 + yDist }L${42 + xDist},${4 + yDist}L${46 + xDist},${8 + yDist}L${42 + xDist},${12 + yDist}L${14 + xDist},${12 + yDist}L${10 + xDist},${8 + yDist}z`;
const potraitBar = (xDist, yDist) =>
  `M${8 + xDist},${10 + yDist}L${12 + xDist},${14 + yDist }L${12 + xDist},${42 + yDist}L${8 + xDist},${46 + yDist}L${4 + xDist},${42 + yDist}L${4 + xDist},${14 + yDist}L${8 + xDist},${10 + yDist}z`;
const abar = horizonBar(0,0);
const bbar = potraitBar(40,0);
const cbar = potraitBar(40,40);
const dbar = horizonBar(0,80);
const ebar = potraitBar(0,40);
const fbar = potraitBar(0,0);
const gbar = horizonBar(0,40);

function initialDigit(xpos) {
  const oFragment = document.createDocumentFragment();
  const g = document.createElement('g');
  g.setAttribute('transform', `translate(${xpos}, 0)`);
  g.setAttribute('class', 'number');
  const as = [[0,0], [40, 0], [40, 40], [0, 80], [0, 40], [0,0], [0, 40]];
  as.forEach((item, i) => {
    const va = document.createElement('path');
    va.setAttribute('d', i%3 === 0 ? horizonBar(...item) : potraitBar(...item));
    g.appendChild(va);
  });
  oFragment.appendChild(g);
  const ggg = document.querySelector('.holder');
  ggg.appendChild(oFragment);
  ggg.innerHTML = ggg.innerHTML;
}

function initialNumber() {
	initialDigit(0);
	initialDigit(60);
	initialDigit(150);
	initialDigit(210);
	initialDigit(300);
	initialDigit(360);
}

function renderTime() {
	// 晶体管数字矩阵，从0-9
	const patterns = [
	  [1,0,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,0,0,1,1,1],
    [1,1,0,1,1,1,1,1,1,1],
    [1,0,1,1,0,1,1,0,1,1],
    [1,0,1,0,0,0,1,0,1,0],
    [1,0,0,0,1,1,1,0,1,1],
    [0,0,1,1,1,1,1,0,1,1],
  ];

  const background = d3.select('svg');
  // copy 一份6个晶体管用来显示颜色，下面一层添加blur，让效果更柔和。
  const topGround = d3.select('body').append(function() { return background.node().cloneNode(true); });
  const svg = d3.selectAll("svg");
  background.attr("id", "background");
  topGround.attr("id", "toplayer");
  const numbers = svg.selectAll(".number");
  const separator = svg.selectAll(".separator circle");

  const renderTick = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    numbers.data([hours/10 | 0, hours%10, minutes/10 | 0, minutes%10, seconds/10 | 0, seconds%10]);
    numbers.select("path:nth-child(1)").classed("on", function(d) { return patterns[0][d]; });
    numbers.select("path:nth-child(2)").classed("on", function(d) { return patterns[1][d]; });
    numbers.select("path:nth-child(3)").classed("on", function(d) { return patterns[2][d]; });
    numbers.select("path:nth-child(4)").classed("on", function(d) { return patterns[3][d]; });
    numbers.select("path:nth-child(5)").classed("on", function(d) { return patterns[4][d]; });
    numbers.select("path:nth-child(6)").classed("on", function(d) { return patterns[5][d]; });
    numbers.select("path:nth-child(7)").classed("on", function(d) { return patterns[6][d]; });
    separator.classed('on', seconds%2);
  }
  setInterval(renderTick, 1000);
}
    
initialNumber();
renderTime();
    

