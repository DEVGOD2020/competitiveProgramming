/**
 * @param {string[]} words
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var vowelStrings = function(words, left, right) {
    let score = 0;
    for(let I = left; I<=right; I++){
        let first = words[I][0]
        let last = words[I][words[I].length-1]
        if( "aeiou".includes(first) && "aeiou".includes(last) ){
            score++;
        }
    }
    return score;
};