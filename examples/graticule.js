goog.require('ol.Graticule');
goog.require('ol.Map');
goog.require('ol.View');
goog.require('ol.layer.Tile');
goog.require('ol.proj');
goog.require('ol.source.OSM');
goog.require('ol.style.Stroke');


var map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  renderer: 'canvas',
  target: 'map',
  view: new ol.View({
    center: ol.proj.fromLonLat([4.8, 47.75]),
    zoom: 5
  })
});

// Create the graticule component
var graticule = new ol.Graticule({
  
  // the style to use for the lines, optional.
  strokeStyle: new ol.style.Stroke({
    color: 'rgba(255,120,0,0.9)',
    width: 2,
    lineDash: [0.5, 4]
  }),
  
  //show labels
  showLabels : true,
	
	//label positions
	lonLabelPosition: 0.05,
	latLabelPosition: 0.95,
	
	//style for longitude label
	lonLabelStyle: new ol.style.Text({
			font: '10px Verdana',
			fill: new ol.style.Fill({
				color: 'rgba(0,0,0,1)'
			})
	}),
	
	//style for latitude label
	latLabelStyle: new ol.style.Text({
			font: '10px Verdana',
			offsetX: -2,
			textBaseline: 'bottom',
			fill: new ol.style.Fill({
				color: 'rgba(0,0,0,1)'
			})
	})
});
graticule.setMap(map);
