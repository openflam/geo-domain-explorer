package s2_region_coverer

import (
	"syscall/js"

	"github.com/golang/geo/s2"
)

// JSGetS2CellsInRegion is a wrapper around GetS2CellIDStrings to be called from JavaScript.
func JSGetS2CellsInRegion(this js.Value, p []js.Value) interface{} {
	points := p[0]
	minLevel := p[1].Int()
	maxLevel := p[2].Int()
	maxCells := p[3].Int()

	// Convert JS array to Go slice of LatLng
	var pointsGo []LatLng
	pointsLength := points.Length()
	for i := 0; i < pointsLength; i++ {
		point := points.Index(i)
		pointsGo = append(pointsGo, LatLng{
			Lat: point.Get("Lat").Float(),
			Lng: point.Get("Lng").Float(),
		})
	}

	// Get the S2 cell IDs and vertices
	cellIDMap := GetS2CellsInRegion(pointsGo, minLevel, maxLevel, maxCells)

	// Convert Go map to JS object
	jsCellIDMap := js.Global().Get("Object").New()
	for cellID, vertices := range cellIDMap {
		jsVertices := js.Global().Get("Array").New(len(vertices))
		for i, vertex := range vertices {
			jsVertex := js.Global().Get("Object").New()
			jsVertex.Set("Lat", vertex.Lat)
			jsVertex.Set("Lng", vertex.Lng)
			jsVertices.SetIndex(i, jsVertex)
		}
		jsCellIDMap.Set(cellID.ToToken(), jsVertices)
	}

	return jsCellIDMap
}

// JSS2CellVerticesFromToken is a wrapper around getS2CellVertices to be called from JavaScript.
func JSS2CellVerticesFromToken(this js.Value, p []js.Value) interface{} {
	token := p[0].String()
	vertices := getS2CellVertices(s2.CellIDFromToken(token))

	// Convert Go slice to JS array
	jsVertices := js.Global().Get("Array").New(len(vertices))
	for i, vertex := range vertices {
		jsVertex := js.Global().Get("Object").New()
		jsVertex.Set("Lat", vertex.Lat)
		jsVertex.Set("Lng", vertex.Lng)
		jsVertices.SetIndex(i, jsVertex)
	}

	return jsVertices
}

// JSS2BinaryIDToToken is a wrapper around S2BinaryIDToToken to be called from JavaScript.
func JSS2BinaryIDToToken(this js.Value, p []js.Value) interface{} {
	binaryID := p[0].String()
	return S2BinaryIDToToken(binaryID)
}

// JSS2TokenToBinaryID is a wrapper around S2TokenToBinaryID to be called from JavaScript.
func JSS2TokenToBinaryID(this js.Value, p []js.Value) interface{} {
	token := p[0].String()
	return S2TokenToBinaryID(token)
}
