/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    
    let digits = [];
    while(n){
        digits.push(n%10);
        n = Math.floor(n/10);
    }

    console.log(digits.reverse());
};