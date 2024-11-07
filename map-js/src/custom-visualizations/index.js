import { initialize_leaflet_map } from "../init-map";
import { domainDigitsToToken } from "../s2-utils";
import { globalState } from "../global-state";

initialize_leaflet_map();

// Visualize geo-domains
const visualizeGeodomainsButton = document.getElementById('visualize-geodomains-button');
const geodomainsTextarea = document.getElementById('geodomains-textarea');

function isValidDomainDigits(domainDigits) {
    // Domain digits is an array of strings.
    // Check all the strings are numbers. Each number is less than 4, except the last one.
    // The last one is less than 6.
    for (let i = 0; i < domainDigits.length - 1; i++) {
        if (isNaN(domainDigits[i]) || parseInt(domainDigits[i]) >= 4) {
            return false;
        }
    }
    let lastDigit = domainDigits[domainDigits.length - 1];
    if (isNaN(lastDigit) || parseInt(lastDigit) >= 6) {
        return false;
    }
    return true;
}

async function visualizeGeodomains() {
    let geodomains = geodomainsTextarea.value.split('\n');

    let layersList = [];
    for (let i = 0; i < geodomains.length; i++) {
        let domainDigits = geodomains[i].split('.');
        if (!isValidDomainDigits(domainDigits)) {
            continue;
        }
        let s2Token = domainDigitsToToken(domainDigits);
        let vertices = S2CellVerticesFromToken(s2Token);
        let coords = vertices.map((coord) => {
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

visualizeGeodomainsButton.addEventListener('click', visualizeGeodomains);
geodomainsTextarea.addEventListener('input', visualizeGeodomains);
