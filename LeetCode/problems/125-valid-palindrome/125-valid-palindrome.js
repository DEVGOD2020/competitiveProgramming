/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let L = 0;
    let R = s.length-1;
    while(L<R){
        if(s[L] !== s[R]){
            return false;
        }
        L++;
        R += -1;
    }
    return true;
};