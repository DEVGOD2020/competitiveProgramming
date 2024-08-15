/**
 * @param {number[]} nums
 * @param {number} minK
 * @param {number} maxK
 * @return {number}
 */
var countSubarrays = function(nums, minK, maxK) {
    //1,2,3,4,5,6,1,2,3,5

    //[2,3,4]
    //[2,3]

    let min = Infinity;
    let max = -Infinity;

    let L = 0;
    let R = 0;
    let score = 0;

    while(R<nums.length){
        if(nums[R] < minK || nums[R] > maxK){
            min = Infinity;
            max = -Infinity;
            L = R+1;
        }

        if(nums[R] === minK){ min = R; }
        if(nums[R] === maxK){ max = R; }

        if(min !== Infinity && max !== -Infinity){
            score += Math.min(min,max) - L + 1;
        }

        R++;
    }

    return score;
};