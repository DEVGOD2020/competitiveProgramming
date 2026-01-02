/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    for(let I = digits.length-1; I>= 0; I--){
        digits[I]++;
        if(digits[I] <= 9){
            return digits;
        }
        digits[I] = 0;
    }
    return [1,...digits];
};
