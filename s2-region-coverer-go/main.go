package main

import (
	"syscall/js"

	"github.com/openvps/geo-domain-explorer/s2-region-covererer-go/s2_region_coverer"
)

func main() {
	c := make(chan struct{}, 0)
	js.Global().Set("GetS2CellsInRegion", js.FuncOf(s2_region_coverer.JSGetS2CellsInRegion))
	js.Global().Set("S2CellVerticesFromToken", js.FuncOf(s2_region_coverer.JSS2CellVerticesFromToken))
	js.Global().Set("S2BinaryIDToToken", js.FuncOf(s2_region_coverer.JSS2BinaryIDToToken))
	js.Global().Set("S2TokenToBinaryID", js.FuncOf(s2_region_coverer.JSS2TokenToBinaryID))
	<-c
}
