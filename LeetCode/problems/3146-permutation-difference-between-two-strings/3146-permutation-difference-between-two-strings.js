/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var findPermutationDifference = function(s, t) {
    let score = 0;
    for(let char of s){
        score += Math.abs( t.indexOf(char) - s.indexOf(char) );
    }
    return score;
};