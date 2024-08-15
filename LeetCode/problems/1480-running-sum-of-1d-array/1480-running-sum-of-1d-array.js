/**\r
 * @param {number[]} nums\r
 * @return {number[]}\r
 */\r
var runningSum = function(nums) {\r
    let I = 1;\r
    while(I<nums.length){\r
        nums[I] += nums[I-1];\r
        I++;\r
    }\r
\r
    return nums;\r
};