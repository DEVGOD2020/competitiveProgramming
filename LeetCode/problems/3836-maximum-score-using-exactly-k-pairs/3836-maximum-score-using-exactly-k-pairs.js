/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    let myMap = new Map();
    let blah = function(A,B, Z){
        if(Z == 0){return 0;}
        if (Z >A+1 || Z>B+1) return -Infinity;
        if(A < 0 || B < 0){return -Infinity;}

        if(!myMap.has(A*(101**2) + B*101 + Z)){
            myMap.set( A*(101**2) + B*101 + Z,
                Math.max(
                    blah(A-1,B-1,Z-1) + nums1[A]*nums2[B],
                    blah(A-1,B, Z),
                    blah(A,B-1, Z)
                )
            )
        }

        return myMap.get(A*(101**2) + B*101 + Z);
    }

    return blah(nums1.length-1, nums2.length-1, k);
};
