const reverseString = function(stringToReverse) {
    //convert string to an array
    stringToArray = stringToReverse.split("");

    //reverse the order of the array
    reversedArray = stringToArray.toReversed();

    //transform the reversed array to a string (used join() instead of toString())
    reversedString = reversedArray.join('');

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
