const reverseString = function(string) {
    // let reverse = "";
    // for (let i = string.length; i <= 0;){} i--){
    //     reverse += string[i];
    // }
    // return reverse;
    return string.split("").reverse().join("");
};


// Do not edit below this line
module.exports = reverseString;
