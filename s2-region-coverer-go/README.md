# S2 Region coverer in Go

This directory contains functions in Go to get a region cover of S2 cells for a given list of latitudes and longitudes. This Go module is compiled to WASM (WebAssembly) so it can be used in the browser environment. The compiled binary is output to `/assets/wasm/region-coverer.wasm` file.

The reason a go implementation is used is because the pure js implementation of s2 ([s2-geometry](https://www.npmjs.com/package/s2-geometry)) does not implement the region coverer algorithm.

To compile to wasm, run the following command in this directory:
```
GOARCH=wasm GOOS=js go build -o ../assets/wasm/region-coverer.wasm ./main.go
```

The file `wasm_exec.js` is already included in the `/assets/wasm/` directory. It was copied from `GOROOT` using `cp "$(go env GOROOT)/misc/wasm/wasm_exec.js" ../assets/wasm`.
