const kelvinTocelsius = require("./kelvinToCelsius.js");

describe("kelvinToCelsius", () => {
    it("Should be loaded", () => {
        expect(true).toBe(true);
    });

    it("should do the proper conversion", () => {
        expect(kelvinTocelsius(42)).toBe(-231);
        expect(kelvinTocelsius(0)).toBe(-273);
        expect(kelvinTocelsius(299.4)).toBe(26);
    });
});
