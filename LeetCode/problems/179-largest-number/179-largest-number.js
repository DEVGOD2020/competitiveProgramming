/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums = nums.map( (el)=>""+el);
    nums.sort((a, b) => {
        return parseInt(b+a) - parseInt(a+b);
    });
    if(nums[0]==="0"){ return "0";}
    return nums.join("");
};