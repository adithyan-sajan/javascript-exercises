const sumAll = function (num1, num2) {
    let sum = 0;
    if (typeof (num1) != "number" || typeof (num2) != "number" || !Number.isInteger(num1) || !Number.isInteger(num2))
        return "ERROR"
    if (num1 < 0 || num2 < 0)
        return "ERROR"
    else {
        if (num1 > num2) {
            let a = num1;
            num1 = num2;
            num2 = a;
        }
        for (let i = num1; i < num2 + 1; i++) {
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
