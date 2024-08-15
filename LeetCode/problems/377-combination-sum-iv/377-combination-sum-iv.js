/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var combinationSum4 = function(nums, target, I=0, dp={}) {
    if(dp[target] !== undefined){return dp[target];}
    else{I = 0;}
    
    if(target == 0){return 1;}
    if(target < 0){return 0;}

    for(let A of nums){

        if(dp[target-A] === undefined){
            I += combinationSum4(nums, target-A, I,dp);
        }else{
            I += dp[target-A];
        }

    }

    if(dp[target] === undefined){
        dp[target] = I;
    }
   
    return dp[target];
};
