/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSum = function(nums) {
    const sum = [...new Set(nums)]
    .filter((el)=>el>0)
    .reduce( (el,sum)=> el+sum, 0) 
    
    return sum == 0 ? Math.max(...nums) : sum;
};
