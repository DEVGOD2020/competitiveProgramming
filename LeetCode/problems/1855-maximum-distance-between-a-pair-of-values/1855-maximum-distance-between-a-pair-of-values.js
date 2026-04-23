/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function(nums1, nums2) {
    let find = function(A,num){
        let L = A+1;
        let R = nums2.length-1;
        let M = 0;
        while(L<=R){
            M = Math.floor( (R+L)/2 );
            if(nums2[M] >= num){L = M+1;}
            else{R = M-1;}
        }
        return R;
    }
    let ans = 0;
    for(let I = 0; I<nums1.length; I++){
        ans = Math.max(ans,find(I,nums1[I])-I);
        console.log(I,find(I,nums1[I]));
    }
    return ans;
};
