const removeFromArray = function (inputArray, ...toBeRemoved) {

    function filtering(iterator) {
        return toBeRemoved.indexOf(iterator) == -1;
    }
    return inputArray.filter(filtering);
};

// Do not edit below this line
module.exports = removeFromArray;

