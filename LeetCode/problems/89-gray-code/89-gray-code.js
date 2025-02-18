/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let ans = [];
    for(let I = 0; I<1<<n; I++){
        ans.push( I^ (I>>1) );
    }
    return ans;
};