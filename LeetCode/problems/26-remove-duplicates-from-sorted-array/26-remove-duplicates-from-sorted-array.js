/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let L = 1;
    for(let R = 0; R < nums.length-1; R++ ){
        if(nums[R+1] !== nums[R]){
        nums[L++] = nums[R+1];
        }
    }
    return L;
};
