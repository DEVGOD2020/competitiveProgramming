/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {
    return Math.min(...nums.map((el)=>(""+el).split("").reduce((sum,el)=>sum+Number(el),0)));
};