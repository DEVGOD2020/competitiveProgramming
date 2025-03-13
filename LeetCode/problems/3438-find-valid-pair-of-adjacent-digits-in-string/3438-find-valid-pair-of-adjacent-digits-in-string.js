/**
 * @param {string} s
 * @return {string}
 */
var findValidPair = function(s) {
    let count = _.countBy(s);

    for(let L=0, R=1; R<s.length; L++, R++){
        if(s[L] != s[R]){
            if( s[L] == count[s[L]] && s[R] == count[s[R]] ){
                return s[L]+s[R];
            }
        }
    }

    return "";
};