/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let score = 0;
    let myMap = new Map();
    for(let A = 0; A<nums1.length; A++){
        for(let B = 0; B<nums1.length; B++){
            let val = nums1[A] + nums2[B];
            myMap.set( val, (myMap.get(val)||0)+1 );
        }
    }

    for(let C = 0; C<nums3.length; C++){
        for(let D = 0; D<nums4.length; D++){
            score += myMap.get( - (nums3[C] + nums4[D]) )||0;
        }
    }

    return score;
};
