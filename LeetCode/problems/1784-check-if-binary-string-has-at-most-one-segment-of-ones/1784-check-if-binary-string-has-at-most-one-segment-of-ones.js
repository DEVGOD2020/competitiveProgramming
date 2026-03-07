/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    let Z = s.indexOf("0");
    let O = s.lastIndexOf("1");
    return (Z == -1) ? true : O<Z ? true : false
};
