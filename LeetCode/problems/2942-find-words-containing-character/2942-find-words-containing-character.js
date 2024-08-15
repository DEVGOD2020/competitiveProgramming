/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    let score = [];

    for(let I = 0; I<words.length; I++){
        if(words[I].includes(x)){
            score.push(I);
        }
    }

    return score;
};