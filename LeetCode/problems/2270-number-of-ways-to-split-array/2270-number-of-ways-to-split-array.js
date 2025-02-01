/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function(nums) {
    let prefix = [];
    let preSum = 0;

    let postfix = [];
    let postSum = 0;

    let L = 0;
    let R = nums.length-1;
    while(L<nums.length){
        preSum += nums[L];
        postSum += nums[R];
        prefix[L] = preSum;
        postfix[R] = postSum;
        L++;
        R--;
    }

    let score = 0;
    for(let I = 0; I<nums.length-1; I++){
        if(prefix[I] >= postfix[I+1]){
            score++;
        }
    }

    return score;
};