/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    const RE = new RegExp(`${part}`);
    while( RE.test(s) ){
        s = s.replace(RE,'');
    }
    return s;
};