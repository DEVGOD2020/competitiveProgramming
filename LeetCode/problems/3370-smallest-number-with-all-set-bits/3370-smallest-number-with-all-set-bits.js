/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let I = 1;
    while(I <= n){
        I = I<<1;
    }
    return I-1;
};
