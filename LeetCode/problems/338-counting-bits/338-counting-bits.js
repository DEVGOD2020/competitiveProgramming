/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let ans = [0];
    for(let I = 1; I <= n; I++){
       ans[I] = ans[I>>1] + (I&1);
    }
    return ans;
};