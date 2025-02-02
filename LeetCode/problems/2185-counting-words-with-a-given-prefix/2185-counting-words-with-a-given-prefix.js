/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
var prefixCount = function(words, pref) {
    return words.reduce( (sum,el)=>sum + el.startsWith(pref), 0);
};