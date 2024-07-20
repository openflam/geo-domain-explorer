import { initialize_leaflet_map } from "./init-map";
import { drawS2RegionCover } from "./s2-region-cover";
import { getGeoDomainsForCurrentCells } from "./s2-utils";

// Imports for testing
import { getGeoDomainFromS2CellID } from './s2-utils';
import { globalState } from './global-state';


initialize_leaflet_map();

// Add event listener to the generate s2 cells button
document.getElementById('generate-s2-button').addEventListener('click', () => {
    drawS2RegionCover();
});

// Add event listener to the generate DNS zone file button
document.getElementById('generate-zonefile-button').addEventListener('click', () => {
    getGeoDomainsForCurrentCells();
});

export var exportedForTesting = {
    // s2-utils
    getGeoDomainFromS2CellID,
    getGeoDomainsForCurrentCells,

    // global-state
    globalState: globalState
}