/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function(s) {
    let L = 0;
    let R = s.length-1;
    let temp = null;
    while(L<R){
        if(s[L] != s[R]){
            temp = s[L];
            s[L] = s[R];
            s[R] = temp;
        }

        L++;    
        R--;
    }
    return s;
};

var easyReverseString = function(s) {
    return s.reverse();
};