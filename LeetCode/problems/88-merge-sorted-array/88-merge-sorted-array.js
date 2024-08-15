/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let I = m;
    const SIZE = m+n;
    while(I<SIZE){
        nums1[I] = nums2[I-m];
        I++;
    }
    nums1.sort( (a, b) => a - b );
};