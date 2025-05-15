/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSum = function(nums1, nums2) {
    let leftSum = 0;
    let rightSum = 0;
    let leftZero = 0;
    let rightZero = 0;

    for(let I = 0; I<nums1.length; I++){
        leftSum += nums1[I];
        leftZero += +(nums1[I]===0);
    }

    for(let I = 0; I<nums2.length; I++){
        rightSum += nums2[I];
        rightZero += +(nums2[I]===0);
    }

    if(leftSum+leftZero > rightSum && rightZero === 0){
        return -1
    }

    if(leftSum < rightSum+rightZero && leftZero === 0){
        return -1
    }

    return Math.max(leftSum+leftZero, rightSum+rightZero);
};