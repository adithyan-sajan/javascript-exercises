const fibonacci = function (input) {
    let n1 = 0;
    let n2 = 1;
    input = Number(input)
    if (input === 1)
        return 1;
    if (input === 0)
        return 0;
    if (input < 0)
        return "OOPS"
    for (let i = 1; i < input; i++) {
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    return n3;
};

// Do not edit below this line
module.exports = fibonacci;
