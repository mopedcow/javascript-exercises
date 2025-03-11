const repeatString = function(string, num) {
    let repeatString = "";
    for (num; num > 0; num--) {
        repeatString += string;
    }
    if (num < 0) {
        return 'ERROR';
    }
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;
