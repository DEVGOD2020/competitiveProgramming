/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    let I = 1;
    while( (n-I).toString().includes("0") || (I).toString().includes("0") ){
        I++;
    }
    return [I,n-I];
};
