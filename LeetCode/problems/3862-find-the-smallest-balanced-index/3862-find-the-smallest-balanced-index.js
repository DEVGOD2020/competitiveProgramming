/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestBalancedIndex = function(nums) {
    let left = nums.reduce( (sum,el)=> sum+el, 0);
    let right = 1;

    let ans = -1;
    for(let I = nums.length-1; I>=0; I--){
        left += -nums[I];
        if(left == right){
            ans = I;
        }

        right *= nums[I];
    }

    return ans;
};
