/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    return word.length >= 3 && 
    /[aeiou]/i.test(word) && 
    /[bcdfghjklmnpqrstvwxyz]/i.test(word) && 
    /^[^@#$]*$/.test(word)
};
