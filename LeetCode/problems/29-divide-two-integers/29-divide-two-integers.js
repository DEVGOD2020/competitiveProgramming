/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let I = 0;
    let counter = -1;
    let temp = divisor;
    divisor = Math.abs(divisor);
    while(I<dividend){
        counter++;
        I+=divisor;
    }

    if(temp < 0){
        counter *= -1;
    }
    return counter;
};