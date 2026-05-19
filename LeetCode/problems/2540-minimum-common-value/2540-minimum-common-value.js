/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    return nums1.find( (el)=> _.sortedIndexOf(nums2,el)>=0)??-1;
};
