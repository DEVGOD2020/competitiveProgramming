/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let L = 0;
    let R = nums.length-1;
    let M = 0;

    let ans = 0;
    while(L<=R){
        M = Math.floor((L+R)/2);
        if(nums[M] === target){return M;}
        else if (nums[M] < target){
             L = M+1;
        }
        else{
             R = M-1;
        }
    }

    return L;
};