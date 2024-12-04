/**
 * @param {number} n
 * @return {number}
 */
var smallestNumber = function(n) {
    let ans = 0;
    while(n>0){
        ans = ans << 1;
        ans++;
        n = n >> 1;
    }
    return ans;
};