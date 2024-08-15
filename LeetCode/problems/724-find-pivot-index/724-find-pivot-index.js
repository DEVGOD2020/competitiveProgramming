/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let sumLeft = [];
    let sumRight = [];

    for(let L = 0; L<nums.length; L++){
        sumLeft.push(nums[L]);
        sumRight.push(nums[nums.length-1-L]);
        const sumValLeft = sumLeft.reduce( (a, c) => a + c );
        const sumValRight = sumRight.reduce( (a, c) => a + c );
        if(sumValLeft === sumValRight){
            return L;
        }
    }
};