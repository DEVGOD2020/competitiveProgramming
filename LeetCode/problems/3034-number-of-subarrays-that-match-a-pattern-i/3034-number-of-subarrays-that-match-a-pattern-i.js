/**
 * @param {number[]} nums
 * @param {number[]} pattern
 * @return {number}
 */
var countMatchingSubarrays = function(nums, pattern) {
    let ans = 0;
    for(let I = 0; I<nums.length; I++){
        let flag = true;
        for(let P = 0; P < pattern.length; P++){
            if(I+P-1 < 0 || I+P >= nums.length){flag = false; break;}
            if(pattern[P] === 1){
                if(nums[I+P] <= nums[I + P - 1]){
                    flag = false;
                    break;
                }
            }
            if(pattern[P] === 0){
                if(nums[I+P] !== nums[I + P - 1]){
                    flag = false;
                    break;
                }
            }
            if(pattern[P] === -1){
                if(nums[I+P] >= nums[I + P - 1]){
                    flag = false;
                    break;
                }
            }
        }
        if(flag){ans++;}
    }
    return ans;
};