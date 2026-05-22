/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let L = 0;
    let R = nums.length-1;
    while(L<=R){
        let M = Math.floor( (L+R)/2);
        if(nums[M]==target){return M;}
        if(nums[L] <= nums[M]){
            if(target >= nums[L] && target < nums[M]){
                R = M-1;
            }else{
                L = M+1;
            }
        }else{
            if(target > nums[M] && target <= nums[R]){
                L = M+1;
            }else{
                R = M-1;
            }
        }
    }
    return -1;
};
