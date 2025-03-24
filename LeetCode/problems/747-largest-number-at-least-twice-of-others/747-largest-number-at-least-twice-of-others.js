/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    const MAX = Math.max(...nums);
    return nums.every( 
        (el)=> MAX == el || MAX >= 2*el
    ) ? nums.indexOf( MAX ) : -1;
};