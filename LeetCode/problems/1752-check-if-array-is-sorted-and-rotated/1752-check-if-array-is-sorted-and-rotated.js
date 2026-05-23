/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    return nums.reduce((sum,el,I)=>sum+(nums.at(I-1)>el),0) <= 1;
};
