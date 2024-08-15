/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function(s) {
    let val = BigInt("0b"+s);
    let score = 0;
    while(val > 1){
        if(val%2n == 0n){
            val = val/2n;
            score++;
        }else{
            val = val+1n;
            score++;
        }
    }
    return score;
};