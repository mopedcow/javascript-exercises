const sumAll = function(startNum, endNum) {
    if (startNum < 0 || endNum < 0) return 'ERROR';
    if (!Number.isInteger(startNum) || !Number.isInteger(endNum)) return 'ERROR';
    //my solution for sorting args high to low (before checking TOP solution):
    //  let numArray = [startNum, endNum];
    //  numArray.sort();
    if (startNum > endNum) [startNum, endNum] = [endNum, startNum];
    //console.log(startNum + ", " + endNum);
    let finalSum = 0;
    for (let i = startNum; i <= endNum; i++){
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
