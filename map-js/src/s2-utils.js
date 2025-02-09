import { globalState } from './global-state';
import { LocationToGeoDomain } from '@openflam/dnsspatialdiscovery';

/*
 * S2 hex token -> domain digits
 */
function tokenToDomainDigits(s2Token) {
    let binaryID = S2TokenToBinaryID(s2Token) // go function
    let domainDigits = binaryIDToDomainDigits(binaryID);
    return domainDigits;
}

/*
 * Domain digits -> S2 hex token
 */
function domainDigitsToToken(domainDigits) {
    let binaryID = domainDigitsToBinaryID(domainDigits);
    let s2Token = S2BinaryIDToToken(binaryID); // go function
    return s2Token;
}

/*
 * Domain digits -> S2 binary ID
 */
function domainDigitsToBinaryID(domainDigits) {
    // Format of S2 Cell ID from http://s2geometry.io/devguide/s2cell_hierarchy.html
    // s = [face] [child]^k 1 0^(60-2k)
    // [face] - 3 bits. [child] - 2 bits each.

    domainDigits.reverse();
    let face = domainDigits[0];
    face = parseInt(face).toString(2).padStart(3, '0');

    let s2Token = face;
    for (let i = 1; i < domainDigits.length; i++) {
        s2Token += parseInt(domainDigits[i]).toString(2).padStart(2, '0');
    }
    s2Token += '1';
    s2Token = s2Token.padEnd(64, '0');
    return s2Token;
}

/*
 * S2 binary ID -> Domain digits
 */
function binaryIDToDomainDigits(binaryID) {
    // Format of S2 Cell ID from http://s2geometry.io/devguide/s2cell_hierarchy.html
    // s = [face] [child]^k 1 0^(60-2k)
    // [face] - 3 bits. [child] - 2 bits each.

    // Pad with 0s to make it 64 bits
    binaryID = binaryID.padStart(64, '0');

    // Remove trailing 0s and 1
    binaryID = binaryID.slice(0, binaryID.lastIndexOf('1'));

    // Face is the first 3 bits
    let face = parseInt(binaryID.slice(0, 3), 2).toString();
    let domainDigits = [face];

    // The hierarchy is the rest of the bits
    let hierarchy = parseInt(binaryID.slice(3), 2).toString(4);
    let expectedLength = (binaryID.length - 3) / 2; // 3 face bits. 2 bits per level.
    hierarchy = hierarchy.padStart(expectedLength, '0');
    let hierarchySplit = hierarchy.split('');

    domainDigits = domainDigits.concat(hierarchySplit);
    domainDigits.reverse();
    return domainDigits;
}

function domainDigitsToAddress(domainDigits, suffix, altitude) {
    return altitude.toString() + '.' + domainDigits.join('.') + '.' + suffix;
}

function getGeoDomainsForCurrentCells(suffix, altitude = 'U', addUnkownAltitudeRecords = false) {
    if (!globalState.currentS2Cells) {
        alert('Please generate S2 cells first');
        return null;
    }
    var domains = [];
    for (let s2Token in globalState.currentS2Cells) {
        let domainDigits = tokenToDomainDigits(s2Token);
        domains.push(domainDigitsToAddress(domainDigits, suffix, altitude));
        if (addUnkownAltitudeRecords && altitude !== 'U') {
            domains.push(domainDigitsToAddress(domainDigits, suffix, 'U'));
        }
    }
    return domains;
}


async function getS2TokensForLocation(lat, lon, error_m) {
    // Get geo domains for the location
    var geoDomains = await LocationToGeoDomain.getGeoDomains(
        parseFloat(lat), parseFloat(lon), parseFloat(error_m), 'loc');
    var domainTos2Tokens = {};
    for (let domain of geoDomains) {
        // Remove the suffix and altitude
        let domainDigits = domain.split('.');
        domainDigits = domainDigits.slice(1, domainDigits.length - 1);

        domainTos2Tokens[domainDigits.join('.')] = domainDigitsToToken(domainDigits);
    }
    return domainTos2Tokens;
}

async function getS2VerticesForLocation(lat, lon, error_m) {
    let domainToS2Token = await getS2TokensForLocation(lat, lon, error_m);
    let domainTos2Vertices = {};
    for (let domain in domainToS2Token) {
        let s2Token = domainToS2Token[domain];
        let vertices = S2CellVerticesFromToken(s2Token);
        domainTos2Vertices[domain] = vertices;
    }
    return domainTos2Vertices;
}

export {
    tokenToDomainDigits,
    domainDigitsToToken,

    binaryIDToDomainDigits,
    domainDigitsToBinaryID,

    getGeoDomainsForCurrentCells,
    getS2TokensForLocation,
    getS2VerticesForLocation,
};