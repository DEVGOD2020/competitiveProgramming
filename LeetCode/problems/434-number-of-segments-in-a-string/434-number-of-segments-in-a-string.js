/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if(s.length == 0){return 0;}
    return s.trim().split(" ").length;
};