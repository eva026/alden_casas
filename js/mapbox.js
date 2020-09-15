// token
mapboxgl.accessToken =
  'pk.eyJ1IjoiZXZhMDI2IiwiYSI6ImNrZXNkc2VydTFiaW8yeW9mZWVodHdiYXEifQ.u9WO-l2DQTnL9Ru8fxYmcw';

// map
var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/eva026/ckewhwlzj0rhq19s35jhi7ols',
  center: [-71.057083, 42.361145],
  zoom: 15,
});

// marker
const el = document.createElement('div');
el.className = 'marker';
var marker = new mapboxgl.Marker({ element: el })
  .setLngLat([-71.057083, 42.361145])
  .addTo(map);
