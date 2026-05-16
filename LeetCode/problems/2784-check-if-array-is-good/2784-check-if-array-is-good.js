/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    nums.sort((a,b)=>a-b);
    for(let I = 0; I<nums.length-1; I++){
        if(nums[I] !== I+1){
            return false;
        }
    }
    return nums[nums.length-1] == nums.length-1;
};
