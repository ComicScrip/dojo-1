const farenheitTocelsius = require("./farenheitToCelsius.js");

describe("farenheitToCelsius", () => {
    it("Should be loaded", () => {
        expect(true).toBe(true);
    });

    it("should do the proper conversion", () => {
        expect(farenheitTocelsius(42)).toBe(6)
        expect(farenheitTocelsius(34)).toBe(1)
        expect(farenheitTocelsius(-678)).toBe(-394)
    });
});
