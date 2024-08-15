/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var minChanges = function(n, k) {
    let I = 1;
    let A = 1;
    let score = 0;
    while(A<10**6){
        let nBinarySpot = (n&A) > 0 ? 1 : 0;
        let kBinarySpot = (k&A) > 0 ? 1 : 0
        if( nBinarySpot == 1 && kBinarySpot == 0 ){
            score++;
        }
        if( nBinarySpot == 0 && kBinarySpot == 1){
            return -1;
        }
        A = 2**I;
        I++;
    }
    return score;
};