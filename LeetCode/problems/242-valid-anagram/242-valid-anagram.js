/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    s = s.split('');
    s.sort();
    s = s.toString();

    t = t.split('');
    t.sort();
    t = t.toString();
    
    return s==t;
};