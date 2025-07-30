/**
 * @param {number} n
 * @return {boolean}
 */
var checkDivisibility = function(n) {
    let sum = 0;
    let product = 1;
    let temp = n;
    while(n>0){
        sum += n%10;
        product *= n%10;
        n = Math.floor(n/10);
    }
    return ((temp%(sum+product)) === 0);
};
