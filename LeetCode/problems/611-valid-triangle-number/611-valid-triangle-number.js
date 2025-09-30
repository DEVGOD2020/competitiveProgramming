/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
    nums.sort( (a,b)=>a-b);
    let score = 0;
    for(let X = 0; X<nums.length-2; X++){
        for(let Y = X+1; Y<nums.length-1; Y++){
            let target = _.sortedIndex(nums, (nums[X]+nums[Y]))-1;
            if( (target-Y)<0){continue;}
            score += (target-Y);
        }
    }
    return score;
};
