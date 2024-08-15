/**
 * @param {number[]} nums
 * @return {number}
 */


var lengthOfLIS = function(nums) {
    let dp = Array(nums.length).fill(1);
    //let dp = [1];
    for(let I = 0; I<nums.length; I++){
        let highest = -Infinity;
        for(let J = I-1; J>=0; J+=-1){
            if(nums[J] < nums[I]){
                if(dp[J] > highest){
                    highest = dp[J]
                }
            }
        }
        if(highest != -Infinity){
            dp[I] += highest;
        }
    }

    return Math.max(...dp);
};