/**
 * @param {number[]} nums
 * @return {number}
 */
var evenNumberBitwiseORs = function(nums) {
    return nums.reduce( (sum,el)=> sum|( el%2 == 0 ? el : 0),0);
};
