/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    let matches = (word.match(/\d+/g)||[]).map(BigInt);
    return new Set(matches).size;
};