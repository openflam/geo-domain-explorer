describe('GenerateZoneFile', function () {
    let zoneFileText = null;
    before('generateZoneFile', function () {
        // Mock currentS2Cells
        maputils.exportedForTesting.globalState.currentS2Cells = {
            "8834f2211": [],
            "8834f22174": [],
            "8834f2217c": [],
            "8834f221c": [],
        };
        const params = {
            dnsSuffix: "loc.",
            mname: "ns.example.com.",
            rname: "dns-admin.example.com.",
            refresh: "900",
            retry: "900",
            expire: "1200",
            minimum: "900",
            rrType: "MCNAME",
            rrData: "examplemaps.com.",
            TTL: "120",
        }

        zoneFileText = maputils.exportedForTesting.generateZoneFile(params);
    });

    it('Origin and TTL are included', function () {
        assert.include(zoneFileText, "$ORIGIN 0.0.1.0.1.2.3.1.2.2.1.0.0.1.4.loc.");
        assert.include(zoneFileText, "$TTL 120");
    });

    it('SOA record is included', function () {
        assert.include(zoneFileText, "@	 		IN	SOA	ns.example.com.	dns-admin.example.com.");
    });

    it('NS record is included', function () {
        assert.include(zoneFileText, "@	IN	NS	ns.example.com.");
    });

    it('TXT records are included', function () {
        assert.include(zoneFileText, '0.2	IN	TXT	type@MCNAME#data@examplemaps.com.');
        assert.include(zoneFileText, '2.3.2	IN	TXT	type@MCNAME#data@examplemaps.com.');
        assert.include(zoneFileText, '3.3.2	IN	TXT	type@MCNAME#data@examplemaps.com.');
        assert.include(zoneFileText, '3	IN	TXT	type@MCNAME#data@examplemaps.com.');
    });
});