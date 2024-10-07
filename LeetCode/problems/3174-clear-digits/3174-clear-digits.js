/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    while(/.[0-9]/.test(s)){
        s = s.replace(/.[0-9]/,'');
    }
    return s;
};