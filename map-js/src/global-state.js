// Maitains some global variables
export const globalState = {
    // The map object returned by leaflet
    map: null,

    // The current polygon layer. It is deleted when a new polygon drawing is started.
    currentPolygonLayer: null,

    // The current polygon's coordinates. It is updated when a new polygon is drawn.
    // These coordinates are used when creating S2 region cover.
    currentPolygonCoords: null,

    // Layer group with S2 cells
    s2CellsLayerGroup: null,

    // Dictionary of s2 cells currently being displayed
    currentS2Cells: null,

    // Set the current polygon coordinates
    setCurrentPolygonCoords(latLngs) {
        this.currentPolygonCoords = latLngs.map((latLng) => {
            return { Lat: latLng.lat, Lng: latLng.lng };
        });
        // The coordinates are in clockwise order, 
        // but the S2 region coverer expects them in counter-clockwise order
        this.currentPolygonCoords.reverse();
    }
};

