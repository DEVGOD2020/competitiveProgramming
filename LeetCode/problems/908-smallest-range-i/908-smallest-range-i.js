/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function(nums, k) {
    if(nums.length == 0){return 0;}
    let diff = (Math.max(...nums)-k) - (Math.min(...nums)+k);

    return diff>0?diff:0;
};
