/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let val = nums.reduce(function(a,b){return a+b},0);
    let expected = (nums.length/2)*(nums.length+1);
    return expected-val;
};