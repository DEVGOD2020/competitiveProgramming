/**
 * @param {number[]} nums
 * @return {number}
 */

var findNumberOfLIS = function(nums) {
    
    let length = new Array(nums.length).fill(1);
    let count = new Array(nums.length).fill(1);

    for(let R = 0; R<nums.length; R++){
        for(let L= 0; L<R; L++){
            if(nums[R] > nums[L]){
                if(length[R] < length[L]+1){
                    length[R] = length[L]+1;
                    count[R] = 0;
                }
                if(length[R] == length[L]+1){
                    count[R] += count[L];
                }
            }
        }
    }

    let maxLength = Math.max(...length);
    let ans = 0;
    for(let I = 0; I<nums.length; I++){
        if(length[I] === maxLength){
            ans += count[I];
        }
    }

    return ans;
};