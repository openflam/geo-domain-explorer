describe('S2Utils', function () {
    const getGeoDomainFromS2CellIDTests = [
        {
            cellID: "8834f2204d",
            suffix: "loc",
            expectedDomain: "2.1.2.0.0.0.1.0.1.2.3.1.2.2.1.0.0.1.4.loc",
        },
        {
            cellID: "3bae1cf",
            suffix: "loc",
            expectedDomain: "3.1.2.3.0.0.3.1.1.3.1.7.loc",
        },
    ];

    getGeoDomainFromS2CellIDTests.forEach(function (testCase) {
        it(`getGeoDomainFromS2CellID should return the correct domain for ${testCase.cellID}`, function () {
            var domain = maputils.exportedForTesting.getGeoDomainFromS2CellID(testCase.cellID, testCase.suffix);
            assert.equal(domain, testCase.expectedDomain);
        });
    });

    it('getGeoDomainsForCurrentCells should return the correct domains', function () {
        // Mock globalState.currentS2Cells
        maputils.exportedForTesting.globalState.currentS2Cells = {
            "8834f21f": [],
            "8834f221": [],
            "8834f2224": [],
            "8834f218b": []
        }
        var domains = maputils.exportedForTesting.getGeoDomainsForCurrentCells("loc");
        var expectedDomains = [
            "3.3.0.0.1.2.3.1.2.2.1.0.0.1.4.loc",
            "0.0.1.0.1.2.3.1.2.2.1.0.0.1.4.loc",
            "2.0.1.0.1.0.1.2.3.1.2.2.1.0.0.1.4.loc",
            "1.1.0.3.0.0.1.2.3.1.2.2.1.0.0.1.4.loc"
        ];
        assert.deepEqual(domains, expectedDomains);
    });
});
