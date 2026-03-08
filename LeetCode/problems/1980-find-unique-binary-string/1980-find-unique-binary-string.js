/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    return nums.map( (el,I)=> +(el[I]!=1)).join("");
};
