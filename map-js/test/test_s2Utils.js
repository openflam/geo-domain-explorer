describe('S2Utils', function () {
    const conversionTests = [
        {
            s2Token: "8834f2204d",
            domainDigits: ['2', '1', '2', '0', '0', '0', '1', '0', '1', '2',
                '3', '1', '2', '2', '1', '0', '0', '1', '4'],
        },
        {
            s2Token: "eeb873c",
            domainDigits: ['3', '1', '2', '3', '0', '0', '3', '1', '1', '3', '1', '7'],
        },
    ];
    describe('S2 -> Geo-domain', function () {
        conversionTests.forEach(function (testCase) {
            it(`tokenToDomainDigits should return the correct domain for ${testCase.s2Token}`, function () {
                var domainDigits = maputils.exportedForTesting.tokenToDomainDigits(testCase.s2Token);
                assert.deepEqual(domainDigits, testCase.domainDigits);
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
                "U.3.3.0.0.1.2.3.1.2.2.1.0.0.1.4.loc",
                "U.0.0.1.0.1.2.3.1.2.2.1.0.0.1.4.loc",
                "U.0.1.0.1.0.1.2.3.1.2.2.1.0.0.1.4.loc",
                "U.1.1.0.3.0.0.1.2.3.1.2.2.1.0.0.1.4.loc"
            ];
            assert.deepEqual(domains, expectedDomains);
        });
    });

    describe('Geo-domain -> S2', function () {
        conversionTests.forEach(function (testCase) {
            it(`domainDigitsToToken should return the correct S2 token - ${testCase.s2Token}`, function () {
                let s2Token = maputils.exportedForTesting.domainDigitsToToken(testCase.domainDigits);
                assert.equal(s2Token, testCase.s2Token);
            });
        });

        it('getS2TokensForLocation should return the correct S2 tokens', async function () {
            const lat = 40.44;
            const lon = -79.95;
            const error_m = 5;
            const domainToS2TokensDict = await maputils.exportedForTesting.getS2TokensForLocation(lat, lon, error_m);
            const s2Tokens = Object.values(domainToS2TokensDict);

            const expectedS2Tokens = [
                "9",
                "8834f2277fe5",
                "8834f2277fe4",
                "8834f2277ff",
                "8834f2277fc",
                "8834f2277f",
                "8834f2277c",
                "8834f2277",
                "8834f2274",
                "8834f227",
                "8834f224",
                "8834f23",
                "8834f24",
                "8834f3",
                "8834f4",
                "8834f",
                "8834c",
                "8835",
                "8834",
                "883",
                "884",
                "89",
                "8c",
                "8834f2277fe7",
                "8834f2277fec",
                "8834f2277ff1",
                "8834f2277ff4",
                "8834f2277ff3",
                "8834f2277ff44",
                "8834f2277ff5",
                "8834f2277ff7",
                "8834f2277ff9",
                "8834f2277ffc",
                "8834f2277ffb",
                "8834f2277ffec",
                "8834f2277fff"
            ];
            assert.sameMembers(s2Tokens, expectedS2Tokens);
        });
    });
});
