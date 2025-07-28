/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let sign = Math.sign(nums[1]-nums[0]);
    let score = 0;
    for(let I = 1; I<nums.length; I++){
        let curSign = Math.sign(nums[I]-nums[I-1]);
        if(sign > 0 && curSign < 0){
            sign = -1;
            score++;
        }
        else if(sign < 0 && curSign > 0){
            sign = 1;
            score++;
        }
        else if(sign == 0){
            sign = curSign;
        }

    }
    return score;
};
