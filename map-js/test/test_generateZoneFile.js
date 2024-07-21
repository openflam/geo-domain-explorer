describe('GenerateZoneFile', function () {
    it('generateZoneFile should return the correct zone file', function () {
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
            rrType: "TXT",
            rrData: "examplemaps.com.",
            TTL: "120",
        }

        const zoneFileText = maputils.exportedForTesting.generateZoneFile(params);
        assert.equal(zoneFileText.length, 595);
        assert.include(zoneFileText, "$ORIGIN 0.0.1.0.1.2.3.1.2.2.1.0.0.1.4.loc.");
        assert.include(zoneFileText, "$TTL 120");
        assert.include(zoneFileText, "@	 		IN	SOA	ns.example.com.	dns-admin.example.com.");
        assert.include(zoneFileText, "0.2	IN	TXT	examplemaps.com.");
        assert.include(zoneFileText, "2.3.3.2	IN	TXT	examplemaps.com.");
        assert.include(zoneFileText, "2.3	IN	TXT	examplemaps.com.");
    });
});