/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let regEx = new RegExp(`[${brokenLetters}]`);
    return text.split(" ").filter(
        (el)=> !regEx.test(el)
    ).length;
};
