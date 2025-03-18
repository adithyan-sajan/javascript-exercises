const palindromes = function (input) {
    allLowerInput = input.toLowerCase();
    allLowerInputNoPunctuation = allLowerInput.replace(/[.,'\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    allLowerInputNoSpace = allLowerInputNoPunctuation.replace(/\s/g, "");;
    reverse = allLowerInputNoSpace.split('').reverse().join('');
    // return reverse;
    if (allLowerInputNoSpace == reverse)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = palindromes;
