import { globalState } from "./global-state";

// Get S2 region cover for the current polygon coordinates
function getS2RegionCover(maxCells, polygonCoords) {
    var points = polygonCoords;
    var minLevel = 1;
    var maxLevel = 30;
    var maxCells = maxCells;

    // Check if the points are in clockwise order
    if (!checkAntiClockwise(points)) {
        points = points.reverse();
    }
    var cells = GetS2CellsInRegion(points, minLevel, maxLevel, maxCells);
    return cells;
}

function checkAntiClockwise(points) {
    var sum = 0;
    for (var i = 0; i < points.length; i++) {
        var p1 = points[i];
        var p2 = points[(i + 1) % points.length];
        sum += (p2.Lng - p1.Lng) * (p2.Lat + p1.Lat);
    }
    return sum < 0;
}

// Draw the S2 region cover on the map
function drawS2RegionCover() {
    if (!globalState.currentPolygonCoords) {
        alert('Please draw a polygon first');
        return;
    }
    var maxCells = document.getElementById('max-s2-cells').value;
    if (!maxCells) {
        alert('Please enter a number of cells');
        return;
    }
    maxCells = parseInt(maxCells);
    var cells = getS2RegionCover(maxCells, globalState.currentPolygonCoords);

    var layersList = [];
    for (let cellID in cells) {
        var coords = cells[cellID];
        coords = coords.map((coord) => {
            return [coord.Lat, coord.Lng];
        });
        var polygon = L.polygon(coords, {
            color: 'red',
            fillOpacity: 0.1,
            opacity: 0.5,
            weight: 2,
        });
        layersList.push(polygon);
    }
    // Remove the current S2 cells layer group
    // if it exists
    if (globalState.s2CellsLayerGroup) {
        globalState.map.removeLayer(globalState.s2CellsLayerGroup);
    }
    globalState.s2CellsLayerGroup = L.layerGroup(layersList);
    globalState.s2CellsLayerGroup.addTo(globalState.map);

    // Update the current S2 cells
    globalState.currentS2Cells = cells;
}

export { drawS2RegionCover };