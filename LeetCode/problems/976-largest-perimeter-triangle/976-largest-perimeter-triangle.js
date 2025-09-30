/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort( (a,b)=>a-b);
    for(let A = nums.length-3; A>=0; A--){
        if(nums[A+2] < nums[A+1] + nums[A]){
            return nums[A] + nums[A+1] + nums[A+2];
        }
    }
    return 0;
};
