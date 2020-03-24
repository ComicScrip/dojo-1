const farenheitToCelsius = require("./farenheitToCelsius.js");

describe("farenheitToCelsius", () => {
    it("Should be loaded", () => {
        expect(true).toBe(true);
    });

    it("should do the proper conversion", () => {
        expect(Math.round(farenheitToCelsius(42))).toBe(6)
        expect(Math.round(farenheitToCelsius(34))).toBe(1)
        expect(Math.round(farenheitToCelsius(-678))).toBe(-394)
    });

    it("should do the proper conversion and round the result", () => {
        expect(farenheitToCelsius(42)).toBe(6)
        expect(farenheitToCelsius(34)).toBe(1)
        expect(farenheitToCelsius(-678)).toBe(-394)
    });
});
