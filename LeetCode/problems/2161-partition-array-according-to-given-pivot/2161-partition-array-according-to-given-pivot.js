/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    return [...nums.filter((el)=>el<pivot)
    ,...nums.filter((el)=>el==pivot),
    ...nums.filter((el)=>el>pivot)];
};