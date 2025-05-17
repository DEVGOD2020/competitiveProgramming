/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let I = (m+n)-1;
    let a = m-1;
    let b = n-1;

    while(b >= 0){
        if(a >= 0 && nums1[a] > nums2[b]){
            nums1[I] = nums1[a];
            a--;
        }else{
            nums1[I] = nums2[b];
            b--;
        }
        I--;
    }
};