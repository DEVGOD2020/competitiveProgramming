/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function(nums) {

    if(nums.length == 1){return true;}
    if(nums[0] == 0){return false;}

    let dp = Array(nums.length).fill(0);
    dp[0] = 1;
    for(let I = 0; I<nums.length-1; I++){
        if(dp[I] > 0){
            for(let A = I+1; A<I+1+nums[I] && A<nums.length; A++){
                dp[A]++;
            }
        }
        if( dp[nums.length-1] > 0 ){
            return true;
        }
    }

    return false;
};