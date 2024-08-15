/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s) {
    let score = 0;
    for(let L = 0; L<s.length-1; L++){
        score += Math.abs(s.charCodeAt(L)-s.charCodeAt(L+1));
    }
    return score;
};