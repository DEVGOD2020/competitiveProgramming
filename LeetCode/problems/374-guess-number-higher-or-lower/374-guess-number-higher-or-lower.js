/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let L = 1;
    let R = n-1;
    let M = 0;

    while(L<=R){
        M = Math.floor((L+R)/2)
        if(guess(M) == 0){
            return M;
        }else if(guess(M) > 0){
            L = M+1;
        }else{
            R = M-1;
        }
    }

    return L;
};