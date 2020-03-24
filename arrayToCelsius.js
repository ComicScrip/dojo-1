const farenheitTocelsius = require("./farenheitToCelsius.js");
const kelvinTocelsius = require("./kelvinToCelsius.js");

const arrayToCelcius = (objects) => {
    return objects.map(o => {
        if (o.unit === "F") return farenheitTocelsius(o.value);
        else if (o.unit === "K") return kelvinTocelsius(o.value);
        else return null;
    })
};

module.exports = arrayToCelcius;
