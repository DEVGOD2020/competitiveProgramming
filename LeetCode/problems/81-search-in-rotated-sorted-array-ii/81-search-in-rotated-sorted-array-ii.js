/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    const N = nums.length-1;
    let L = 0;
    let R = N;
    while(L<=R){
        let M = Math.floor((L+R)/2);
        if(nums[M]==target){return true;}
        if(nums[M] > nums[R]){
            if(target >= nums[L] && target < nums[M]){
                R = M-1;
            }else{
                L = M+1;
            }
        }
        else if(nums[M] < nums[R]){
            if(target > nums[M] && target <= nums[R]){
                L = M+1;
            }else{
                R = M-1;
            }
        }
        else if(nums[M] == nums[R]){R--;}
    }

    return false;
};
