/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDotProduct = function(nums1, nums2) {
    const N = nums1.length;
    const M = nums2.length;
    const DP = new Array(N * M).fill(-Infinity);
    const blah = (A,B)=> A*(N+M)+B;
    for(let A = 0; A<N; A++){
        for(let B = 0; B<M; B++){
            DP[blah(A,B)] = Math.max(
                nums1[A]*nums2[B],
                nums1[A]*nums2[B] + (DP[blah(A-1,B-1)]??-Infinity),
                DP[blah(A-1,B)]??-Infinity,
                DP[blah(A,B-1)]??-Infinity
            );
        }
    }
    return DP[DP.length-1];
};
