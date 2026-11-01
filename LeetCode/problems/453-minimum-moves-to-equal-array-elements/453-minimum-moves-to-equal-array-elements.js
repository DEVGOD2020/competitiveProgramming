/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    let min = Math.min(...nums);
    return nums.reduce( (sum,el)=>sum+Math.abs(el-min),0);
};