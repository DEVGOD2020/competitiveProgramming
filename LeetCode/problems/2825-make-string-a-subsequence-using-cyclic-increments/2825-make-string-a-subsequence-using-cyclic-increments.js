/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function(str1, str2) {
    let L = 0;
    let R = 0;

    let shiftChar = (chr)=> 
    String.fromCharCode((chr.charCodeAt()-96)%26+97);
   
    while(L < str1.length && R<str2.length){
        if(str1[L] === str2[R] || 
        shiftChar(str1[L]) === str2[R]){
            R++;
        }
        L++;
    }

    return R==str2.length;
};