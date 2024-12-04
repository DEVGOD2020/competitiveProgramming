/**
 * @param {number[]} nums
 * @return {number}
 */

let rob = function(nums){
    let memo = {}; 
    let dp = function(I){
        if(I >= nums.length){return 0;}
        
        if(memo[I] !== undefined){
            return memo[I];
        }
        memo[I] = Math.max( nums[I]+dp(I+2), dp(I+1));
        return  memo[I];
    }

    return dp(0);
}