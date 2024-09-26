/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let jumps = 0;
    let currMax = 0;
    let newMax = 0;

    for(let I = 0; I<nums.length-1; I++){
        //New furtherst point
        newMax = Math.max(newMax, I + nums[I]);

        //Previous best point hit, so actually jump it
        if(I == currMax){
            jumps++;
            currMax = newMax;
        }
    }

    return jumps;
};