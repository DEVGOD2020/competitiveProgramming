/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    return nums.map((el)=>el**2).sort((a,b)=>a-b);
};