// Maitains some global variables

// The map object returned by leaflet
var map = null;

// The current polygon layer. It is deleted when a new polygon drawing is started.
var currentPolygonLayer = null;

// The current polygon's coordinates. It is updated when a new polygon is drawn.
// These coordinates are used when creating S2 region cover.
var currentPolygonCoords = null;

// Layer group with S2 cells
var s2CellsLayerGroup = null;

function setCurrentPolygonCoords(latLngs) {
    currentPolygonCoords = latLngs.map((latLng) => {
        return { Lat: latLng.lat, Lng: latLng.lng };
    });
    // The coordinates are in clockwise order, 
    // but the S2 region coverer expects them in counter-clockwise order
    currentPolygonCoords.reverse();
}

export {
    map,
    currentPolygonCoords,
    currentPolygonLayer,
    s2CellsLayerGroup,
    setCurrentPolygonCoords
};
