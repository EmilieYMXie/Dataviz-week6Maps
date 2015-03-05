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

/*
 * Red circle for 110 Morningside Drive
 */
var circle = L.circle([40.81008, -73.95709], 500, {
	color : 'red',
	fillColor : '#f03',
	fillOpacity : 0.5
}).addTo(map);

var warmingShelters = warmingShelterData.rows;

for (var i = 0; i < warmingShelters.length; i++) {
	var individualWarmingShelters = warmingShelters[i];
	/*
	 * Marker
	 */
	var marker = L.marker([individualWarmingShelters.Latitude, individualWarmingShelters.Longitude]).addTo(map);

	/*
	 * Popup
	 */
	marker.bindPopup("<b>"+individualWarmingShelters.FullAddress+"</b><br>"+individualWarmingShelters.ProgramName);//openPopup will open all popups .openPopup()
}//end of for loop

