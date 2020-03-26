const humanReadableFizzBuzz = (number) => {
    if (number % 3 === 0 && number % 5 === 0) {
        return "fizzbuzz";
    } else if (number % 3 === 0) {
        return "fizz";
    } else if (number % 5 === 0) {
        return "buzz";
    } else {
        return number;
    }
}

const mathematicianReadableFizzBuzz = (number) => {
    if (number % 15 === 0) {
        return "fizzbuzz";
    } else if (number % 3 === 0) {
        return "fizz";
    } else if (number % 5 === 0) {
        return "buzz";
    } else {
        return number;
    }
}

const fizzBuzzTwoExplicitConditions = (number) => {
    let result = '';
    if (number % 3 === 0) {
        result = "fizz";
    }
    if (number % 5 === 0) {
        result += "buzz";
    }
    return result || number;
};

const fizzBuzzOneLineWTF = number => [['fizz'][number % 3], ['buzz'][number % 5]].join('') || number

module.exports = fizzBuzzOneLineWTF;
