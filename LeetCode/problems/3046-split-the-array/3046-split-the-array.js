/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossibleToSplit = function(nums) {
    return Object.values(_.countBy(nums)).every( (el)=>el<=2);
};