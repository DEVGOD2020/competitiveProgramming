/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let mySet = new Set(nums);
    while(mySet.has(original)){
        original *= 2;
    }
    return original;
};
