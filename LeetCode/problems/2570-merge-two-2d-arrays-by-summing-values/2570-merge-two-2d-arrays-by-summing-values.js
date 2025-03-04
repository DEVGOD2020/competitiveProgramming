/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    let myMap = new Map(nums1);
    for(let [I,val] of nums2){
        myMap.set(I, (myMap.get(I)|0) + val)
    }

    return _.toPairs(myMap).sort( (a, b) => a[0] - b[0] );
};