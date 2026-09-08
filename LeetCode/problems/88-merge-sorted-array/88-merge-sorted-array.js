/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const SIZE = m+n;
    for(let L = m-1, R = n-1, I=SIZE-1; I>=0; I--){
        if( (nums1[L]??-Infinity) < nums2[R] ){nums1[I] = nums2[R]; R--; }
        else{ nums1[I] = nums1[L]; L--;}
    }
};
