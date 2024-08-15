/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function(nums){
    if(nums.length <= 2){return Math.max(...nums);}
    const option1 = nums.slice(0, nums.length-1);
    const option2 = nums.slice(1, nums.length);
    return Math.max(robbing(option1),robbing(option2) );
}

var robbing = function(nums) {
    if(nums.length <= 2){return Math.max(...nums);}
    let dp = [];
      //dp = Array(nums.length).fill(-Infinity);
      dp[0] = nums[0];
      dp[1] = nums[1];
      dp[2] = nums[0]+nums[2];

    let I = 3;
    const SIZE = nums.length;
    while(I<SIZE){
      dp[I] = nums[I]+Math.max(dp[I-2],dp[I-3]);
      I++;
    }

    return Math.max(...dp);
};

