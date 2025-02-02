/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var xorAllNums = function(nums1, nums2) {
    let sum = 0;
    for(let num of nums1){
        sum ^= nums2.length%2 == 0 ? 0 : num;
    }
    for(let num of nums2){
        sum ^= nums1.length%2 == 0 ? 0 : num;
    }
    return sum;
};