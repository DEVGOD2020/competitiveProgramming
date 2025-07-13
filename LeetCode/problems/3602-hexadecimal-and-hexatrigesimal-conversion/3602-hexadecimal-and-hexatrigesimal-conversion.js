/**
 * @param {number} n
 * @return {string}
 */
var concatHex36 = function(n) {
    return ((n**2).toString(16) + "" + (n**3).toString(36) ).toUpperCase();
};
