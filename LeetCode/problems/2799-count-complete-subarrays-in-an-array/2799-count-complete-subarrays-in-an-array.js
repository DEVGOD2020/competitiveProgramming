/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function(nums) {
    let target = new Set(nums).size;

    let L = 0;
    let R = 0;
    let winMap = new Map();
    let ans = 0;
    while(R<nums.length){
        winMap.set(nums[R], (winMap.get(nums[R])|0) +1);
        while(winMap.size == target && L<R){
            if(winMap.get(nums[L])-1 > 0){
                winMap.set(nums[L], winMap.get(nums[L])-1)
            }
            else if(winMap.get(nums[L])-1 == 0){
                if(winMap.size-1 < target){ break;}
                winMap.delete(nums[L]);
            }
            L++;
        }
        if(winMap.size == target){
            ans += (L+1);
        }
        
        R++;
    }
    return ans;
};