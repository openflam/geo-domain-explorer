package s2_region_coverer

import (
	"github.com/golang/geo/s2"
)

// LatLng represents a latitude and longitude.
type LatLng struct {
	Lat, Lng float64
}

// GetS2CellsInRegion takes a list of LatLng and returns a dictionary keyed by the S2 Cell ID
// The value for a key is an array of the latitudes and longitudes of the 4 vertices that make up that cell.
func GetS2CellsInRegion(points []LatLng, minLevel, maxLevel, maxCells int) map[s2.CellID][]LatLng {
	// Convert LatLng points to s2.Point
	var pointsS2 []s2.Point
	for _, point := range points {
		latLng := s2.LatLngFromDegrees(point.Lat, point.Lng)
		pointsS2 = append(pointsS2, s2.PointFromLatLng(latLng))
	}

	// Create an s2.Loop from the points
	loop := s2.LoopFromPoints(pointsS2)

	// Create a RegionCoverer
	rc := &s2.RegionCoverer{
		MinLevel: minLevel,
		MaxLevel: maxLevel,
		MaxCells: maxCells,
	}
	// Get the covering cells
	covering := rc.Covering(loop)

	// Create a map to hold the cell ID strings and their vertices
	cellIDMap := make(map[s2.CellID][]LatLng)
	for _, cellID := range covering {
		cellIDMap[cellID] = getS2CellVertices(cellID)
	}

	return cellIDMap
}

// Returns the latitudes and longitudes of the 4 vertices that make up an S2 cell.
func getS2CellVertices(cellID s2.CellID) []LatLng {
	cell := s2.CellFromCellID(cellID)
	var vertices []LatLng
	for i := 0; i < 4; i++ {
		vertex := cell.Vertex(i)
		latLng := s2.LatLngFromPoint(vertex)
		vertices = append(vertices, LatLng{
			Lat: latLng.Lat.Degrees(),
			Lng: latLng.Lng.Degrees(),
		})
	}
	return vertices
}
