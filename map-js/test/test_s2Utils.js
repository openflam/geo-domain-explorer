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
                "3.3.0.0.1.2.3.1.2.2.1.0.0.1.4.loc",
                "0.0.1.0.1.2.3.1.2.2.1.0.0.1.4.loc",
                "0.1.0.1.0.1.2.3.1.2.2.1.0.0.1.4.loc",
                "1.1.0.3.0.0.1.2.3.1.2.2.1.0.0.1.4.loc"
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
                "8834f2277f8c",
                "8834f2277f9",
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
                "8834f2277f94",
                "8834f2277fbfc",
                "8834f2277fbf",
                "8834f2277fbc",
                "8834f2277fb",
                "8834f2277fc4",
                "8834f2277fd",
                "8834f2277fdc",
                "8834f2277ff",
                "8834f2278001c",
                "8834f2278001",
                "8834f2278004",
                "8834f227801",
                "8834f227804",
                "8834f22781",
                "8834f22784",
                "8834f2279",
                "8834f227c",
                "8834f2278003",
                "8834f227801d",
                "8834f227801c",
                "8834f227801e4",
                "8834f227801f"
            ];
            assert.sameMembers(s2Tokens, expectedS2Tokens);
        });
    });
});
