// receives 1 array and as many additional arguments as necessary, all within args
const removeFromArray = function(myArray, ...args) {
    const newArray = []
    // check if each item in our array is not an arg, and 
    // if not, push to new array
    for (item of myArray) {
        if (!args.includes(item)) {
            newArray.push(item);
          }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
