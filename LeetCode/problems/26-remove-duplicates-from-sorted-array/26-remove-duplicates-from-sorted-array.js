/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let currentIndex = 1;
    for(let i = 0; i < nums.length-1; i++ ){
        if(nums[i+1] !== nums[i]){
        nums[currentIndex++] = nums[i+1];
        } 
    }
    return currentIndex
};