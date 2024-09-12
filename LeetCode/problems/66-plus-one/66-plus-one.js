/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let I = digits.length-1; I>= 0; I--){
        digits[I]++;
        if(digits[I] > 9){
            digits[I] = 0;
        }else{
            return digits;
        }
    }
    digits.unshift(1);
    return digits;
};