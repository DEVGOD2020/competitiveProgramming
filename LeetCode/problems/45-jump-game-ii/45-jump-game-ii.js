/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    

    let helper = function(I, score=0){
        if(I==nums.length-1){
            return score;
        }

        let min = Number.MAX_SAFE_INTEGER;
        for(let A = I+1; A<=I+nums[I]; A++){
            let val = helper(A, score+1);
            min = Math.min(min, helper(A, score+1));
        }

        return min;
    }

    return helper(0);
};