/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
    let set1 = new Set(nums1);

    let mySet = new Set();
    for(let el of nums2){
        if(set1.has(el)){
            mySet.add(el);
        }
    }

    return [...mySet];
};