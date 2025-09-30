/**
 * @param {number} n
 * @param {number[]} costs
 * @return {number}
 */
var climbStairs = function(n, costs) {
    let memo = new Map();
    let helper = function(n){
        if(n <= 0){return 0;}
        let A = memo.has(n-1) ? memo.get(n-1) : helper(n-1);
        let B = memo.has(n-2) ? memo.get(n-2) : helper(n-2);
        let C = memo.has(n-3) ? memo.get(n-3) : helper(n-3);
        memo.set(n, Math.min(
            A + costs[n-1] + (1)**2, 
            B + costs[n-1] + (2)**2, 
            C + costs[n-1] + (3)**2
        ) );
        return memo.get(n);
    }
    return helper(n);
};
