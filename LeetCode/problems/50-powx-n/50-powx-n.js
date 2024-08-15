/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

 //easy 
var myPow2 = function(x, n) {
    return x**n;
};

var myPow = function(x, n) {
    if(n<0){return x;}
    else{
        return myPow(x*x,n-1);
    }
};