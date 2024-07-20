import { globalState } from './global-state';

function getGeoDomainFromS2CellID(s2CellID, suffix) {
    // Format of S2 Cell ID from http://s2geometry.io/devguide/s2cell_hierarchy.html
    // s = [face] [child]^k 1 0^(60-2k)
    // [face] - 3 bits. [child] - 2 bits each. 
    // s2CellID is a hex string with no trailing 0s

    // Convert to binary
    var binary = parseInt(s2CellID, 16).toString(2);

    // Remove trailing 1
    binary = binary.slice(0, binary.length - 1);

    // Face is the first 3 bits
    var face = parseInt(binary.slice(0, 3), 2).toString()

    // The hierarchy is the rest of the bits
    var digits = parseInt(binary.slice(3), 2).toString(4)
    digits = digits.split('')
    digits.reverse()
    digits.push(face)

    var address = digits.join('.') + '.' + suffix
    return address;
}

function getGeoDomainsForCurrentCells(suffix) {
    if (!globalState.currentS2Cells) {
        alert('Please generate S2 cells first');
        return;
    }
    var domains = [];
    for (let cellID in globalState.currentS2Cells) {
        var domain = getGeoDomainFromS2CellID(cellID, suffix);
        domains.push(domain);
    }
    console.log(domains);
    return domains;
}

export {
    getGeoDomainFromS2CellID,
    getGeoDomainsForCurrentCells
};