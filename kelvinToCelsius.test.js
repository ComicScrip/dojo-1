const kelvinToCelsius = require("./kelvinToCelsius.js");

describe("kelvinToCelsius", () => {
    it("Should be loaded", () => {
        expect(true).toBe(true);
    });

    it("should do the proper conversion", () => {
        expect(Math.round(kelvinToCelsius(42))).toBe(-231);
        expect(Math.round(kelvinToCelsius(0))).toBe(-273);
        expect(Math.round(kelvinToCelsius(299.4))).toBe(26);
    });

    it("should do the proper conversion and round the result", () => {
        expect(kelvinToCelsius(42)).toBe(-231);
        expect(kelvinToCelsius(0)).toBe(-273);
        expect(kelvinToCelsius(299.4)).toBe(26);
    });
});
