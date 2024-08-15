/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let lowerUpperCaseSet = new Set();
    let upperCaseSet = new Set();

    for(let chr of word){
        lowerUpperCaseSet.add(chr);
        upperCaseSet.add(chr.toUpperCase());
    }

    return lowerUpperCaseSet.size-upperCaseSet.size;
};