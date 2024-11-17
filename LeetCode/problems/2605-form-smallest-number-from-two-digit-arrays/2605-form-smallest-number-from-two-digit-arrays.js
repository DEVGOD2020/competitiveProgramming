/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minNumber = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    for(let I = 0; I<10; I++){
        if(set1.has(I) && set2.has(I)){
            return I;
        }
    }

    let min1 = Number(Math.min(...nums1)+""+Math.min(...nums2));
    let min2 = Number(Math.min(...nums2)+""+Math.min(...nums1));
    let min = Math.min(min1,min2);

    return min;
};