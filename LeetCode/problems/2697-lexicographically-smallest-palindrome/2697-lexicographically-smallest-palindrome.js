/**
 * @param {string} s
 * @return {string}
 */
var makeSmallestPalindrome = function(s) {
    let L = 0;
    let R = s.length-1;
    let newStr = s.split("");
    while(L<R){
        if( newStr[L] < newStr[R] ){
            newStr[R] = newStr[L];
        }else{
            newStr[L] = newStr[R];
        }
        L++;
        R+=-1;
    }

    return newStr.join("");
};