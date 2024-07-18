import { currentPolygonLayer, currentPolygonCoords } from "./global-state";

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

    // When a new polygon is started, deletes the current polygon layer
    map.on('pm:drawstart', (e) => {
        if (currentPolygonLayer) {
            map.removeLayer(currentPolygonLayer);
        }
    });

    // When a new polygon is created, changes the current polygon layer to the new polygon layer
    // and updates the current polygon coordinates
    map.on('pm:create', (e) => {
        if (e.shape === 'Polygon') {
            const layer = e.layer;
            const latLngs = layer.getLatLngs()[0];
            currentPolygonCoords = latLngs;
            currentPolygonLayer = layer;
        }
    });
}

export { initialize_leaflet_map };