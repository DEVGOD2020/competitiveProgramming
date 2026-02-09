/**
 * @param {number} n
 * @return {number}
 */
var countMonobit = function(n) {
    let score = 0;
    for(let I = 1; (I-1) <= n; I*=2){
        score++;
    }
    return score;
};
