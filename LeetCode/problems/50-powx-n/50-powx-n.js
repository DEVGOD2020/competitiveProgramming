/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

var myPow = function(x, n) {
    if(n == 0){return 1;}
    if(n < 0){
        n = -n;
        x = 1/x;
    }

    let ans = 1;
    while(n > 0){
        if(n&1){ans = ans*x;}
        x = x*x;
        n = n >>> 1;
    }
    return ans;
};