const removeFromArray = function(userArray, ...itemsToRemove) {
    for (let j = 0; j < itemsToRemove.length; j++) {
        console.log(`At argument position: ${j}:`);
        for (let i = 0; i < userArray.length; i++) {
            console.log(`userArray at ${i}: ${userArray[i]}, arg number: ${itemsToRemove[j]}.`);
            if (userArray[i] === itemsToRemove[j]) {
                console.log(`Found '${userArray[i]}' at ${i}`);
                userArray.splice(i, 1);
                i = 0;
                console.log(`user array: ` + userArray);
            }
        }
    }
    
    return userArray;
};

// Do not edit below this line
module.exports = removeFromArray;
