/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    if(digits[digits.length-1] !== 9){
        digits[digits.length-1]++;
        return digits;
    }else{
        digits[digits.length-1] = 0;
        let pointer = digits.length-2;
        let carry = 1;
        while(carry == 1 && pointer >= 0){
            if(digits[pointer] == 9){
                carry = 1;
                digits[pointer] = 0;
                pointer--;
            }else{
                digits[pointer] += carry;
                return digits;
            }
        }

        digits.unshift(1);
        return digits;
    }
};