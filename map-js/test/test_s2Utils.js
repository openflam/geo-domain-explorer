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
    describe('S2 -> GeoDomain', function () {
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

    describe('GeoDomain -> S2', function () {
        getGeoDomainFromS2CellIDTests.forEach(function (testCase) {
            it(`getS2TokenFromDomainDigits should return the correct S2 token - ${testCase.cellID}`, function () {
                let domainDigits = testCase.expectedDomain.split('.');
                // Remove suffix
                domainDigits = domainDigits.slice(0, domainDigits.length - 1);
                var s2Token = maputils.exportedForTesting.getS2TokenFromDomainDigits(domainDigits);
                assert.equal(s2Token, testCase.cellID);
            });
        });

        it('getS2TokensForLocation should return the correct S2 tokens', function () {
            const lat = 40.44;
            const lon = -79.95;
            const error_m = 5;
            const s2Tokens = maputils.exportedForTesting.getS2TokensForLocation(lat, lon, error_m);

            const expectedS2Tokens = [
                "220d3c89dff9",
                "220d3c89dffb",
                "220d3c89dffd",
                "220d3c89dfff",
                "8834f2277ff",
                "220d3c89dff",
                "8834f2277f",
                "220d3c89df",
                "8834f2277",
                "220d3c89d",
                "8834f227",
                "220d3c89",
                "8834f23",
                "220d3c9",
                "8834f3",
                "220d3d",
                "8834f",
                "220d3",
                "8835",
                "220d",
                "883",
                "221",
                "89",
                "23",
                "9"
            ];
            assert.equal(s2Tokens.length, expectedS2Tokens.length);
            assert.deepEqual(s2Tokens, expectedS2Tokens);
        });
    });
});
