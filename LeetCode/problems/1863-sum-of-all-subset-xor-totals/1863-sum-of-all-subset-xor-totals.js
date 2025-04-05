/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function(nums) {
    let oreo = 0;
    for(let num of nums){
        oreo |= num;
    }
    return oreo << (nums.length-1);
};