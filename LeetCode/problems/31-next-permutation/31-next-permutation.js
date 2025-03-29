/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let reverse = function(start){
        let end = nums.length-1;
        while(start<end){
            [nums[start],nums[end]] = [nums[end],nums[start]]
            start++;
            end--;
        }
    }
    for(let L = nums.length-1; L>=0; L--){
        if(nums[L] < nums[L+1]){
            let R = nums.length-1;
            while(nums[L] >= nums[R] && L < R){
                R--;
            }
            [nums[L],nums[R]] = [nums[R],nums[L]];
            reverse(L+1);
            return;
        }
    }

    nums.reverse()
};