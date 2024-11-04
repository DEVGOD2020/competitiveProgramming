/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function(word) {
    return word.match(/(\w)\1{0,8}/g).map( (el)=> el.length+el[0]).join("");
};