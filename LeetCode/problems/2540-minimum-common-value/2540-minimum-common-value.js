/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let mySet = new Set(nums1);

    for(let el of nums2){
        if(mySet.has(el)){
            return el;
        }
    }

    return -1;
};