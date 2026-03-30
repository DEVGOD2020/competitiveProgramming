/**
 * @param {number[]} nums
 * @return {number}
 */
var minAbsoluteDifference = function(nums) {
    let prev = -1;
    let prevNum = -1;
    let ans = 1000;
    for(let I = 0; I<nums.length; I++){
        if(nums[I] == 1 && prevNum == 2){
            ans = Math.min(ans, I-prev);
        }
        if(nums[I] == 2 && prevNum == 1){
            ans = Math.min(ans, I-prev);
        }
        if(nums[I] == 1 || nums[I]==2){
            prev = I;
            prevNum = nums[I];
        }
    }
    return ans==1000?-1:ans;
};
