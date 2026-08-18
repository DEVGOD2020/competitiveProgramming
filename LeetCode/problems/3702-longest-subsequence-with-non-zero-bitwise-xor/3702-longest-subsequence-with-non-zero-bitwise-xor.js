/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubsequence = function(nums) {
    let XOR = 0;
    let flag = false;
    for(let n of nums){
        if(n >0){flag=true;}
        XOR = XOR^n;
    }
    if(XOR == 0 && flag){
        return nums.length-1;
    }else if(flag){
        return nums.length;
    }
    return 0;
};