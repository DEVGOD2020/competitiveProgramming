/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    if(nums.length === 0){return [];}
    let ans = [];

    let blah = nums[0];
    let nya = nums[0];
    for (let I = 1; I < nums.length; I++) {
        if (nums[I] - nums[I - 1] == 1) {
            nya++;
        } else {
            ans.push((blah === nya) ? ""+blah : blah + "->" + nya);
            blah = nums[I];
            nya = nums[I];
        }
    }
    ans.push((blah === nya) ? ""+blah : blah + "->" + nya);

    return ans;
};