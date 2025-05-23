/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let L = 0;
    let R = nums.length-1;
    let M;

    let isSortedHalf = function(start,end){
        return nums[start] <= nums[end];
    }

    while(L <= R){
        M = Math.floor( (L+R)/2 );

        if(nums[M] === target){ return M; }

        if(isSortedHalf(L,M)){
            if( nums[L] <= target && target <= nums[M]){
                R = M - 1;
            }else{
                L = M + 1;
            }
        }else{
            if( nums[M] <= target && target <= nums[R]){
                L = M + 1;
            }else{
                R = M - 1;
            }
        }
    }

    return -1;
};