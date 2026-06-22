/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums.sort( (a,b)=>a-b);
    if((a = nums.indexOf(target)) == -1){
        return [];
    }
    return _.range( a, nums.lastIndexOf(target)+1);
};