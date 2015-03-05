/*
 * Taken from http://leafletjs.com/examples/quick-start.html
 * x, y longditude + latitude  40.81008,-73.95709 is 110 Morningside Drive
 */

var map = L.map('leafletMap').setView([ 40.81008,-73.95709], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);