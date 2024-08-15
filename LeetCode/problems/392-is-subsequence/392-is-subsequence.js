/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let L = 0
    let R = 0;
    while(L<s.length && R < t.length){
        if(s[L] == t[R]){ L++; }
        R++;
    }

    return L == s.length;
};