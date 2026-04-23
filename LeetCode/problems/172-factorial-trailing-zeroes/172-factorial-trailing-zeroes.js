/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let A = 0;
    let Q = 5;
    while(Q<=n){
        A += Math.floor(n/Q);
        Q *= 5;
    }
    return A;
};
