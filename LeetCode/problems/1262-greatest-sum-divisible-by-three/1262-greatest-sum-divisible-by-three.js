/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSumDivThree = function(nums) {
    let dp = Array.from( 
        {length:nums.length+1}, ()=>
        new Array(3).fill(0) 
    );

    dp[0][0] = 0;
    dp[0][1] = -Infinity;
    dp[0][2] = -Infinity;
    for(let I = 1; I<=nums.length; I++){
        for(let Z = 0; Z<3; Z++){
            dp[I][Z] = Math.max(dp[I-1][Z], dp[I-1][ (nums[I-1]+Z)%3 ] + nums[I-1]);
        }
    }
    
    return dp[nums.length][0];
};


