/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let length = new Array(nums.length).fill(1);
    let ans = 1;
    for(let R = 0; R<nums.length; R++){
        for(let L= 0; L<R; L++){
            if(nums[R] > nums[L]){
                if(length[R] < length[L]+1){
                    length[R] = length[L]+1;
                    ans = Math.max(ans,length[R]);
                }
            }
        }
    }

    return ans;
};