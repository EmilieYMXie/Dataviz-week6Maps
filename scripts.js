/*
 * Taken from http://leafletjs.com/examples/quick-start.html
 * x, y longditude + latitude  40.81008,-73.95709 is 110 Morningside Drive
 * GREL for finding lat: value.parseJson().results[0].geometry.location.lat
 */

var map = L.map('leafletMap').setView([40.81008, -73.95709], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var circle = L.circle([40.81008, -73.95709], 500, {
	color : 'red',
	fillColor : '#f03',
	fillOpacity : 0.5
}).addTo(map);

var warmingShelters = warmingSheltersData.rows;

for (var i = 0; i < warmingShelters.length; i++) {
	/*
	 * Marker
	 */
	var marker = L.marker([40.81008, -73.95709]).addTo(map);

	/*
	 * Popup
	 */
	marker.bindPopup("<b>University Apartment Housing</b><br>110 Morningside Drive.").openPopup();
}//end of for loop

