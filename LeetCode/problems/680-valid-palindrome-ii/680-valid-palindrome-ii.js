/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s, deleted=0) {
    let L = 0;
    let R = s.length-1;
    while(L<=R){
        if(s[L] !== s[R]){
            if(deleted > 0){return false;}
            return validPalindrome(s.substring(L,R), 1) || 
            validPalindrome(s.substring(L+1,R+1), 1);
        }
        L++;
        R--;
    }
    return true;
};
