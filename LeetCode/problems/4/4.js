/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let newArr = _.sortBy(nums1.concat(nums2));
    let mid = Math.floor(newArr.length/2);
    if(newArr.length%2 === 1){
        return newArr[mid];
    }
    return (newArr[mid-1]+newArr[mid])/2
}