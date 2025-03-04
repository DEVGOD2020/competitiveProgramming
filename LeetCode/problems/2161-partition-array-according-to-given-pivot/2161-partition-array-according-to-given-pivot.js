/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
    return Object.values(Object.groupBy(nums, (el) => Math.sign(el - pivot) + 1)).flat();
}