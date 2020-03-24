const arrayToCelsius = require("./arrayToCelsius.js");

describe("arrayToCelsius", () => {
    it("Should be loaded", () => {
        expect(true).toBe(true);
    });

    it("should do the proper conversion", () => {
        expect(arrayToCelsius([
            {unit: "F", value: 42},
            {unit: "K", value: 42},
            {value: 42}
        ])).toBe([])
    });
});
