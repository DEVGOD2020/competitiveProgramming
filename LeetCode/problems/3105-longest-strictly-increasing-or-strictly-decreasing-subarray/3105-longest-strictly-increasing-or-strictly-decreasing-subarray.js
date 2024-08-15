/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    if(nums.length == 1){return 1;}
    let L = 0
    let R = 1;

    let maxInc = 0;
    let maxDec = 0;
    while(R < nums.length){
        if(nums[R-1] >= nums[R]){ L=R;R++;}
        else{ R++; }
        maxInc = Math.max(maxInc,R-L);
    }
    L=0; R=1;
    while(R < nums.length){
        if(nums[R-1] <= nums[R]){L=R; R++;}
        else{ R++; }
        maxDec = Math.max(maxDec,R-L);
    }

    return Math.max(maxInc, maxDec);
};