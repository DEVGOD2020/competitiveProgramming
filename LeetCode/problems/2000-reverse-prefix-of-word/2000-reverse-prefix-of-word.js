/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    let firstIndex = word.indexOf(ch) + 1;
    return word.slice(0, firstIndex).split("").reverse().join("")+word.slice(firstIndex, word.length);
};