/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    let mySet = new Set([...nums]);
    const A = k;
    while(mySet.has(k)){
        k += A;
    }
    return k;
};
