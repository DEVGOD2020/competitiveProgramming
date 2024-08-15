/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let score = 0;
    for(let I = 0; I<=n; I++){
        if(I%3 == 0 || I%5 == 0 || I%7 == 0){
            score += I;
        }
    }
    return score;
};