/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = _.sortBy(nums);
    
    let ans = [];
    for(let I = 0; I<nums.length-2; I++){
        if (nums[I] > 0){ break; }
        let L = I+1;
        let R = nums.length-1;

        while(L<R){
            let sum = nums[I]+nums[L]+nums[R];
            if(sum == 0){
                ans.push( [nums[I],nums[L],nums[R]] );
                while(nums[L+1] == nums[L]){ L++; }
                while(nums[R-1] == nums[R]){ R--; }
                L++;
                R--;
            }

            else if(sum < 0){ L++;}
            else{R--;}
        }

        while(nums[I+1] == nums[I]){ I++;}
    }

    return ans;
};