const removeFromArray = function (inputArray, ...toBeRemoved) {
    function ifPresentInInput(iterator) {
        return toBeRemoved.indexOf(iterator) === -1; // Keep only items NOT in toBeRemoved
    }

    return inputArray.filter(ifPresentInInput);

};

// Do not edit below this line
module.exports = removeFromArray;

