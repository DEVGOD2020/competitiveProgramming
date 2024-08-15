/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let L = 0;
    let R = 0;
    let ans = [];
    nums1.sort(function(a,b){return a-b;});
    nums2.sort(function(a,b){return a-b;});

    while(R<nums2.length && L < nums1.length){
        if(nums1[L] === nums2[R]){
            ans.push(nums2[R]);
            L++;
            R++;
        }
        else if(nums1[L] < nums2[R]){
            L++;
        }else{
            R++;
        }
    }

    return ans;
};