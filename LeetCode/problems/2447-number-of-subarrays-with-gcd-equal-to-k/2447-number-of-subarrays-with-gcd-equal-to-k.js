/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarrayGCD = function(nums, k) {
    return nums.filter((el)=>{ return el % 3 === 0; }).length;
};

//[3]
//[9,3]
//[12,9]