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

function generateZoneFile() {
    var suffix = document.getElementById('dns-suffix').value;
    // If suffix does not end with a dot, add it as we need fully qualified domain names
    if (suffix[suffix.length - 1] != '.') {
        suffix += '.';
    }

    // Get SOA values
    var mname = document.getElementById('mname').value;
    var rname = document.getElementById('rname').value;
    var refresh = document.getElementById('refresh').value;
    var retry = document.getElementById('retry').value;
    var expire = document.getElementById('expire').value;
    var minimum = document.getElementById('minimum').value;

    var rrType = document.getElementById('rr-type').value.toLowerCase();
    var rrData = document.getElementById('rr-data').value;
    var TTL = document.getElementById('ttl').value;
    var domains = getGeoDomainsForCurrentCells(suffix);
    if (!domains) {
        return;
    }

    var origin = longestCommonSuffix(domains);
    origin = origin.slice(1); // Remove the trailing dot
    var zoneJSON = {
        "$origin": origin,
        "$ttl": TTL,
        "soa": {
            "mname": mname,
            "rname": rname,
            "serial": Date.now().toString(),
            "refresh": refresh,
            "retry": retry,
            "expire": expire,
            "minimum": minimum,
        },
    };

    zoneJSON[rrType] = []
    for (let domain of domains) {
        // Remove the common suffix and the trailing dot
        var subDomain = domain.slice(0, domain.length - origin.length - 1);
        zoneJSON[rrType].push({
            "name": subDomain,
            [DNS_DATA_KEYS[rrType]]: rrData,
        });
    }

    var zoneFileText = zonefile.generate(zoneJSON);
    console.log(zoneFileText);
    return zoneFileText;
}

export { generateZoneFile };