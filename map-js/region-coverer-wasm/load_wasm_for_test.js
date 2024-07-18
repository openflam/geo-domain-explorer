async function loadWasm() {
    const go = new Go();
    const result = await WebAssembly.instantiateStreaming(fetch("/region-coverer-wasm/region-coverer.wasm"), go.importObject);
    go.run(result.instance);
}
