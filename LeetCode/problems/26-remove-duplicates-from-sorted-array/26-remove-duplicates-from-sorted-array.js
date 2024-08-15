/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let currentIndex = 0;
    for(let i = -1; i < nums.length-1; i++ ){
        if(nums[i+1] !== nums[i]){
        nums[currentIndex++] = nums[i+1];
        } 
    }
    nums.length = currentIndex
    return nums.length
};