/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return _.reverse(s.trim().replaceAll(/\s+/g," ").split(" ")).join(" ");
};