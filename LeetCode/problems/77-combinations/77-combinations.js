/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let ans = [];
    let comb = []
    let helper = function(A){
        if(comb.length === k) {
            ans.push([...comb])
            return
        }
        for(let I = A; I<=n; I++){
            comb.push(I);
            helper(I+1);
            comb.pop();
        }
    }
    helper(1);
    return ans;
};