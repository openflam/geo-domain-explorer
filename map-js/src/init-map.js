// leaflet, leaflet-geoman, and leaflet-geosearch are imported in index.html as including them in 
// the bundle makes the bundle size too large
function initialize_leaflet_map() {
    var map = L.map('map').setView([40.44266, -79.94327], 17);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Add toolbar
    map.pm.addControls({
        drawMarker: false,
        drawCircleMarker: false,
        drawPolyline: false,
        drawRectangle: false,
        drawPolygon: true,
        drawCircle: false,
        drawText: false,
    });

    //Add search bar
    const provider = new GeoSearch.OpenStreetMapProvider();
    const searchControl = new GeoSearch.GeoSearchControl({
        provider: provider,
        style: 'bar',
    });
    map.addControl(searchControl);
}

export { initialize_leaflet_map };