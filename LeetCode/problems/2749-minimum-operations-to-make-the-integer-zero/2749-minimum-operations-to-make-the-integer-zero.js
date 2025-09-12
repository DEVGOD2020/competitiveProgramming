/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = function(num1, num2) {
    let bc = function(n){
        return  n.toString(2).split('1').length - 1;
    }
    let check = function(n, I){
        return bc(num1 - (num2*I)) <= I && num1 - (num2*I) >= I;
    }
    for(let I = 1; I<=60; I++){
        if(check( num1, I )){
            return I;
        }
    }
    return -1;
};
