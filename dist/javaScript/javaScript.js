let runs = [
  {
    id: 1,
    date: 'October 1, 2017 at 4:00PM',
    distance: 5.2
  },
  {
    id: 2,
    date: 'October 2, 2017 at 5:00PM',
    distance: 7.0725
  },
  {
    id: 3,
    date: 'October 3, 2017 at 6:00PM',
    distance: 8.7
  },
  {
    id: 4,
    date: 'October 4, 2017 at 4:00PM',
    distance: 5.2
  },
  {
    id: 5,
    date: 'October 5, 2017 at 5:00PM',
    distance: 7.0725
  },
  {
    id: 6,
    date: 'October 6, 2017 at 6:00PM',
    distance: 8.7
  }
];

// let WIDTH = 800;
// let HEIGHT = 600;

let WIDTH = 800;
let HEIGHT = 300;

d3.select('svg')
  .style('WIDTH', WIDTH)
  .style('HEIGHT', HEIGHT);

d3.json('data.json').then(function (data) {
  // console.log(data);
  d3.select('svg').selectAll('rect')
    .data(data)
    .enter()
    .append('rect');

  var yScale = d3.scaleLinear();
  yScale.range([HEIGHT, 0]);
  var yMin = d3.min(data, function (datum, index) {
    return datum.count;
  });
  var yMax = d3.max(data, function (datum, index) {
    return datum.count;
  });
  yScale.domain([yMin - 1, yMax]);

  d3.selectAll('rect')
    .attr('height', function (datum, index) {
      return HEIGHT - yScale(datum.count);
    });

  var xScale = d3.scaleLinear(); xScale.range([0, WIDTH]); xScale.domain([0, data.length]); d3.selectAll('rect').attr('x', function (datum, index) { return xScale(index); });

  d3.selectAll('rect')
    .attr('y', function (datum, index) {
      return yScale(datum.count);
    });

  d3.selectAll('rect')
    .attr('width', WIDTH / data.length);

  var yDomain = d3.extent(data, function (datum, index) {
    return datum.count;
  });
  var colorScale = d3.scaleLinear();
  colorScale.domain(yDomain);
  colorScale.range(['#00cc00', 'blue']);
  d3.selectAll('rect')
    .attr('fill', function (datum, index) {
      return colorScale(datum.count);
    });

  var leftAxis = d3.axisLeft(yScale);
  d3.select('svg')
    .append('g').attr('id', 'left-axis')
    .call(leftAxis);

  var skillScale = d3.scaleBand();
  var skillDomain = data.map(function (skill) {
    return skill.name;
  });
  skillScale.range([0, WIDTH]);
  skillScale.domain(skillDomain);

  var bottomAxis = d3.axisBottom(skillScale);
  d3.select('svg')
    .append('g').attr('id', 'bottom-axis')
    .call(bottomAxis)
    .attr('transform', 'translate(0,' + HEIGHT + ')');
});
