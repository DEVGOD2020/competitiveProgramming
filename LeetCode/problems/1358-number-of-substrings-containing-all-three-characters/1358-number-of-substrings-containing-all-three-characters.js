/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    let arr = [-1,-1,-1];
    let score = 0;

    for(let I = 0; I<s.length; I++){
        let ID = s[I].charCodeAt(0) - 'a'.charCodeAt(0);
        arr[ID] = I;

        score += 1 + Math.min(...arr);
    }

    return score;
};