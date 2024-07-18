// Maitains some global variables

// The current polygon layer. It is deleted when a new polygon drawing is started.
var currentPolygonLayer = null;

// The current polygon's coordinates. It is updated when a new polygon is drawn.
// These coordinates are used when creating S2 region cover.
var currentPolygonCoords = null;

export { currentPolygonCoords, currentPolygonLayer };
