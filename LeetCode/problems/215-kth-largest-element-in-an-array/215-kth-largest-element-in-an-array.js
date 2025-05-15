/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    return MaxPriorityQueue.fromArray(nums).toArray()[k-1];
};