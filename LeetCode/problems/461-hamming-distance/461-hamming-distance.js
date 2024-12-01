/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    
    let score = 0;
    while(x > 0 || y > 0){
        score += +( (x&1) !== (y&1) )
        x >>= 1;
        y >>= 1;
    }
    return score;
};

