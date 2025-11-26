/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    for(let f of [2,3,5]){
        while( n && n%f == 0){
            n /= f;
        }
    }
    return n === 1;
};
