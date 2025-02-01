/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    let letters = new Set(s);

    let score = 0;
    for(let letter of letters){
        let L = s.indexOf(letter);
        let R = s.lastIndexOf(letter);

        score += new Set(s.slice(L+1,R)).size;
    }

    return score;
};