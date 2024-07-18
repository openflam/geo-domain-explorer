package main

import (
	"syscall/js"

	"github.com/openvps/geo-domain-explorer/s2-region-covererer-go/s2_region_coverer"
)

func main() {
	c := make(chan struct{}, 0)
	js.Global().Set("GetS2CellsInRegion", js.FuncOf(s2_region_coverer.JSGetS2CellsInRegion))
	<-c
}
