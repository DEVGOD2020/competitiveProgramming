/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    return nums.reduce( (sum,el)=> sum+Math.min(el%3,3-(el%3)), 0);
};
