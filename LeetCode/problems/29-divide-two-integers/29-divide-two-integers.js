/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    let count = 0;
    let sign = Math.sign(dividend) == Math.sign(divisor) ? 1 : -1;

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    
    while(divisor <= dividend){
        let value = divisor;
        let multiple = 1;
        while( value+value <= dividend){
            value += value;
            multiple += multiple;
        }
        dividend -= value;
        count += multiple;
    }

    let ans = sign*count;
    if(ans >= 2**31){
        ans = (2 ** 31)-1;
    }
    return ans;
};