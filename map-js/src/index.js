import { initialize_leaflet_map } from "./init-map";
import { drawS2RegionCover } from "./s2-region-cover";
import { generateZoneFile } from "./dns-zonefile";

// Imports for testing
import { getGeoDomainFromS2CellID, getGeoDomainsForCurrentCells } from './s2-utils';
import { globalState } from './global-state';


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
        generateZoneFile();
    }
    else {
        formElement.reportValidity();
    }
});

export var exportedForTesting = {
    // s2-utils
    getGeoDomainFromS2CellID,
    getGeoDomainsForCurrentCells,

    // global-state
    globalState: globalState
}