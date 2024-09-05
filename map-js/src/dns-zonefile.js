import zonefile from 'dns-zonefile';
import { getGeoDomainsForCurrentCells } from './s2-utils';

// Mapping from DNS type to the corresponding data keys
// used by dns-zonefile
const DNS_DATA_KEYS = {
    "a": "ip",
    "cname": "alias",
    "txt": "txt",
}

function longestCommonSuffix(domains) {
    var commonSuffix = '';
    var minLength = Math.min(...domains.map(domain => domain.length));
    for (let i = 0; i < minLength; i++) {
        var char = domains[0][domains[0].length - i - 1];
        if (domains.every(domain => domain[domain.length - i - 1] == char)) {
            commonSuffix = char + commonSuffix;
        } else {
            break;
        }
    }
    return commonSuffix;
}

function generateZoneFile(params) {
    var suffix = params.dnsSuffix;
    // If suffix does not end with a dot, add it as we need fully qualified domain names
    if (suffix[suffix.length - 1] != '.') {
        suffix += '.';
    }
    var domains = getGeoDomainsForCurrentCells(suffix);
    if (!domains) {
        return null;
    }

    var origin = longestCommonSuffix(domains);
    origin = origin.slice(1); // Remove the trailing dot
    var zoneJSON = {
        "$origin": origin,
        "$ttl": params.TTL,
        "soa": {
            "mname": params.mname,
            "rname": params.rname,
            "serial": parseInt((Date.now() / 1000)) % Math.pow(2, 32), // 32-bit serial number
            "refresh": params.refresh,
            "retry": params.retry,
            "expire": params.expire,
            "minimum": params.minimum,
        },
    };

    zoneJSON["ns"] = [
        { "name": "@", "host": params.mname },
    ];

    zoneJSON["txt"] = []
    for (let domain of domains) {
        // Remove the common suffix and the trailing dot
        var subDomain = domain.slice(0, domain.length - origin.length - 1);
        zoneJSON["txt"].push({
            "name": subDomain,
            "txt": `type@${params.rrType}#data@${params.rrData}`,
        });
    }

    var zoneFileText = zonefile.generate(zoneJSON);
    return zoneFileText;
}

function generateZoneFileFromDOM() {
    const params = {
        dnsSuffix: document.getElementById('dns-suffix').value,
        mname: document.getElementById('mname').value,
        rname: document.getElementById('rname').value,
        refresh: document.getElementById('refresh').value,
        retry: document.getElementById('retry').value,
        expire: document.getElementById('expire').value,
        minimum: document.getElementById('minimum').value,
        rrType: document.getElementById('rr-type').value,
        rrData: document.getElementById('rr-data').value,
        TTL: document.getElementById('ttl').value,
    };

    const zoneFileText = generateZoneFile(params);
    if (!zoneFileText) {
        return null;
    }
    // Download the zone file
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(zoneFileText));
    element.setAttribute('download', 'dns-zonefile.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    return zoneFileText;
}

export { generateZoneFile, generateZoneFileFromDOM };