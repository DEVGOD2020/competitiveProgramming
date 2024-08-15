/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function(nums, k) {
    let max = Math.max(...nums)
    let sum = max;
    for(let I = 0; I<k-1; I++){
        sum += max+1;
        max += 1;
    }
    return sum;
};