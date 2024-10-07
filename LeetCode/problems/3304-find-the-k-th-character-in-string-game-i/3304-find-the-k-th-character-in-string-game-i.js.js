/**
 * @param {number} k
 * @return {character}
 */
var kthCharacter = function(k) {
    //abbc
    //0=a, 1 = b, 2 = b, 3 = c ect
    return String.fromCharCode((k - 1).toString(2).split('1').length + 96);
};