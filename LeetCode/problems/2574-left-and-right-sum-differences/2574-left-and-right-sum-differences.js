/**
 * @param {number[]} nums
 * @return {number[]}
 */
var leftRightDifference = function(nums) {

    let leftSum = 0;
    let rightSum = nums.slice(1,nums.length).reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    },0);

    for(let I = 0; I<nums.length; I++){
        let temp = nums[I]
        nums[I] = Math.abs(leftSum-rightSum);
        leftSum += temp;
        rightSum += -nums[I+1];
    }

    return nums;

};