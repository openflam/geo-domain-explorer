describe('S2TokenToVertices (go)', function () {
    const S2TokenToVerticesTests = [
        {
            token: "8834f2204d",
            expectedVertices: [
                {
                    "Lat": 40.441929214997245,
                    "Lng": -79.94375316456247
                },
                {
                    "Lat": 40.44161400203946,
                    "Lng": -79.94375316456247
                },
                {
                    "Lat": 40.441583384657484,
                    "Lng": -79.94340345589214
                },
                {
                    "Lat": 40.441898597561206,
                    "Lng": -79.94340345589214
                }
            ]
        },
        {
            token: "3bae1cf",
            expectedVertices: [
                {
                    "Lat": 13.175885508322704,
                    "Lng": 77.69941967936705
                },
                {
                    "Lat": 13.176992526316727,
                    "Lng": 77.7223162444476
                },
                {
                    "Lat": 13.199645859400919,
                    "Lng": 77.7223162444476
                },
                {
                    "Lat": 13.198537074742893,
                    "Lng": 77.69941967936705
                }
            ]
        },
    ]

    S2TokenToVerticesTests.forEach(function (testCase) {
        it(`S2TokenToVertices should return the correct vertices for ${testCase.token}`, function () {
            var vertices = S2CellVerticesFromToken(testCase.token);
            assert.deepEqual(vertices, testCase.expectedVertices);
        });
    });
});
