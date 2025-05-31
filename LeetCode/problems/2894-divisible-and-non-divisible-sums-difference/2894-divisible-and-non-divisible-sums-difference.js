/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let Z = Math.floor(n/m);
    let nums2 = (Z/2)*(Z+1)*m;
    let nums1 = (n/2)*(n+1) - nums2;
    return nums1 - nums2;
};

//nums2 = [3,6,9] Arthmetic seqence times m, to Z many numbers you can do
//nums1 = total N arth sum, but minused what you found for nums2


