const sumAll = function(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return "ERROR";
    if (a < 0 || b < 0) return "ERROR";

    let sum = 0;
    if (a < b) {
        for (let i=a; i <= b; i++){
            sum+=i;
        }
    } else if (a > b) {
        for (let i=b; i <= a; i++){
            sum+=i;
        }
    } else if (a=b){
        sum=a+b;
    } else {
        return Error;
    }
    return sum;
};


// Do not edit below this line
module.exports = sumAll;