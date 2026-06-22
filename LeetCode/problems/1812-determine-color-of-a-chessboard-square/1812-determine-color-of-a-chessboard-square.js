/**
 * @param {string} c
 * @return {boolean}
 */
var squareIsWhite = function(c) {
    return ((c.charCodeAt(0)-65) + Number(c[1]))%2 == 0
};