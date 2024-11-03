/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for(let I = 0; I<nums.length; I++){
        let index = Math.abs(nums[I])-1;
        if(nums[index] > 0){
            nums[index] = -nums[index];
        }
    }

    let ans = [];
    for(let I = 0; I<nums.length; I++){
        if(nums[I] > 0){
            ans.push(I+1);
        }
    }

    return ans;
};