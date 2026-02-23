/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    let R = s.length-1;
    for(let L = 0; L<R; L++, R--){
        if(s[L] != s[R]){
            return 2;
        }
    }
    return 1;
};
