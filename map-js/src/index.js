import { initialize_leaflet_map } from "./init-map";
import { drawS2RegionCover } from "./s2-region-cover";
import { generateZoneFileFromDOM } from "./dns-zonefile";
import { drawGeoDomainsforCurrentMarker } from "./loc-to-cells";
import { globalState } from './global-state';

// Imports for testing
import {
    getGeoDomainFromS2CellID, getGeoDomainsForCurrentCells,
    getS2TokensForLocation, getS2TokenFromDomainDigits
} from './s2-utils';
import { generateZoneFile } from "./dns-zonefile";


initialize_leaflet_map();

// Add event listener to the generate s2 cells button
document.getElementById('generate-s2-button').addEventListener('click', () => {
    drawS2RegionCover();
});

// Add event listener to the generate DNS zone file button
const formElement = document.getElementById('dns-config-form');
formElement.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent page reload
    if (formElement.checkValidity()) {
        generateZoneFileFromDOM();
    }
    else {
        formElement.reportValidity();
    }
});

// Add event listener to the gps-error slider to update the error circle radius
// if the marker is already placed
document.getElementById('gps-error').addEventListener('change', (event) => {
    if (globalState.currentMarkerErrorCircleLayer) {
        let error_m = event.target.value;
        globalState.currentMarkerErrorCircleLayer.setRadius(error_m);
        drawGeoDomainsforCurrentMarker();
    }
});

// Add event listener to the generate geodomains button
document.getElementById('generate-geodomains-button').addEventListener('click', () => {
    if (globalState.currentMarkerLayer) {
        drawGeoDomainsforCurrentMarker();
    }
    else {
        alert('Please place a marker first');
    }
});

// Add event listener to the clear marker button
document.getElementById('clear-marker-button').addEventListener('click', () => {
    if (globalState.currentMarkerLayer) {
        globalState.map.removeLayer(globalState.currentMarkerLayer);
        globalState.map.removeLayer(globalState.currentMarkerErrorCircleLayer);
        globalState.currentMarkerLayer = null;
        globalState.currentMarkerErrorCircleLayer = null;
        if (globalState.currentGeoS2CellsLayerGroup) {
            globalState.map.removeLayer(globalState.currentGeoS2CellsLayerGroup);
            globalState.currentGeoS2CellsLayerGroup = null;
        }
    }
});

// Add event listener to the clear polygon button
document.getElementById('clear-polygon-button').addEventListener('click', () => {
    if (globalState.currentPolygonLayer) {
        globalState.map.removeLayer(globalState.currentPolygonLayer);
        globalState.currentPolygonLayer = null;
        globalState.currentPolygonCoords = null;
        if (globalState.s2CellsLayerGroup) {
            globalState.map.removeLayer(globalState.s2CellsLayerGroup);
            globalState.s2CellsLayerGroup = null;
            globalState.currentS2Cells = null;
        }
    }
});

export var exportedForTesting = {
    // s2-utils
    getGeoDomainFromS2CellID,
    getGeoDomainsForCurrentCells,
    getS2TokensForLocation,
    getS2TokenFromDomainDigits,

    // dns-zonefile
    generateZoneFile,
    generateZoneFileFromDOM,

    // global-state
    globalState: globalState
}