import { globalState } from "./global-state";
import { drawGeoDomainsforCurrentMarker } from "./loc-to-cells";

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
        drawMarker: true,
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
        if (e.shape === 'Polygon') {
            if (globalState.currentPolygonLayer) {
                map.removeLayer(globalState.currentPolygonLayer);
                globalState.currentPolygonLayer = null;
                globalState.currentPolygonCoords = null;
            }
            if (globalState.s2CellsLayerGroup) {
                map.removeLayer(globalState.s2CellsLayerGroup);
                globalState.s2CellsLayerGroup = null;
                globalState.currentS2Cells = null;
            }
        }
    });

    // When a new polygon is created, changes the current polygon layer to the new polygon layer
    // and updates the current polygon coordinates
    map.on('pm:create', (e) => {
        if (e.shape === 'Polygon') {
            const layer = e.layer;
            const latLngs = layer.getLatLngs()[0];
            globalState.setCurrentPolygonCoords(latLngs);
            globalState.currentPolygonLayer = layer;
        }
        if (e.shape === 'Marker') {
            const layer = e.layer
            if (globalState.currentMarkerLayer) {
                map.removeLayer(globalState.currentMarkerLayer);
                map.removeLayer(globalState.currentMarkerErrorCircleLayer);
                globalState.currentMarkerLayer = null;
                globalState.currentMarkerErrorCircleLayer = null;
            }
            globalState.currentMarkerLayer = layer;

            // Add error circle with radius equal to the error
            let error_m = document.getElementById('gps-error').value;
            globalState.currentMarkerErrorCircleLayer = L.circle(layer.getLatLng(), {
                radius: error_m,
                color: 'purple',
                weight: 1,
                fillColor: 'purple',
                fillOpacity: 0.2,
            }).addTo(map);

            // Draw the geodomains for the current marker
            drawGeoDomainsforCurrentMarker();
        }
    });

    globalState.map = map;
}

export { initialize_leaflet_map };