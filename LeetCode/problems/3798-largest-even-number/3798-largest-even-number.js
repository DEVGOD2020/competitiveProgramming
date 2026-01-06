/**
 * @param {string} s
 * @return {string}
 */
var largestEven = function(s) {
    for(let I = s.length-1; I>=0; I--){
        if(Number(s[I])%2 == 0){
            return s.slice(0,I+1);
        }
    }
    return "";
};
