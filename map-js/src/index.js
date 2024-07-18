import { initialize_leaflet_map } from "./init-map";
import { currentPolygonCoords } from "./global-state";
import { drawS2RegionCover } from "./s2-region-cover";

initialize_leaflet_map();

// Add event listener to the generate s2 cells button
document.getElementById('generate-s2-button').addEventListener('click', () => {
    drawS2RegionCover();
});

export { currentPolygonCoords, drawS2RegionCover };