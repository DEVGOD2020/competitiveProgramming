/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    nums = nums.sort(function(a,b) { return a - b } );
    let score = 0;
    for(let I = 0; I< nums.length; I+=2){
        score += nums[I];
    }

    return score;
};