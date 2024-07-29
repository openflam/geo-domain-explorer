import { getS2VerticesForLocation } from './s2-utils';
import { globalState } from './global-state';

async function drawGeoDomainsforCurrentMarker() {
    let markerLocation = globalState.currentMarkerLayer.getLatLng();
    let lat = markerLocation.lat;
    let lon = markerLocation.lng;
    let error_m = globalState.currentMarkerErrorCircleLayer.getRadius();
    let domainTos2Vertices = await getS2VerticesForLocation(lat, lon, error_m);

    let layersList = [];
    for (let domain in domainTos2Vertices) {
        let s2CellVertices = domainTos2Vertices[domain];
        let coords = s2CellVertices.map((coord) => {
            return [coord.Lat, coord.Lng];
        });
        var polygon = L.polygon(coords, {
            color: 'purple',
            fillOpacity: 0,
            opacity: 1,
            weight: 3,
        });
        layersList.push(polygon);
    }
    // Remove the current S2 cells geo domain layer group
    // if it exists
    if (globalState.currentGeoS2CellsLayerGroup) {
        globalState.map.removeLayer(globalState.currentGeoS2CellsLayerGroup);
    }
    globalState.currentGeoS2CellsLayerGroup = L.layerGroup(layersList);
    globalState.currentGeoS2CellsLayerGroup.addTo(globalState.map);
}

export { drawGeoDomainsforCurrentMarker };