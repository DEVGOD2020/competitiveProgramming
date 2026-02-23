/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let score = 0;
    let prev = -1;
    let I = 0;
    while(n>0){
        if(n&1 == 1){
            if(prev != -1){
                score = Math.max(score, I-prev);
            }
            prev = I;
        }
        n = n>>1;
        I++;
    }
    return score;
};
