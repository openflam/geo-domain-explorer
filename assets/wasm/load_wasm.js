async function loadWasm() {
    const go = new Go();
    const result = await WebAssembly.instantiateStreaming(fetch("assets/wasm/region-coverer.wasm"), go.importObject);
    go.run(result.instance);
}

window.addEventListener("load", loadWasm);