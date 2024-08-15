/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length){return false;}

    for(let I = 0; I<s.length; I++){
        if(s.indexOf(s[I]) !== t.indexOf(t[I])){
            return false;
        }
    }

    return true;
};