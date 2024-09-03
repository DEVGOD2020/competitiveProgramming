/**
 * @param {number} num1
 * @param {number} num2
 * @param {number} num3
 * @return {number}
 */
var generateKey = function(num1, num2, num3) {
    let key = 0;
    let multi = 1;
    while(num1 > 0 && num2 > 0 && num3 > 0){
        key += Math.min( num1%10, num2%10, num3%10)*multi;
        num1 = Math.floor(num1/10);
        num2 = Math.floor(num2/10);
        num3 = Math.floor(num3/10);
        multi *= 10;
    }

    return key;
};