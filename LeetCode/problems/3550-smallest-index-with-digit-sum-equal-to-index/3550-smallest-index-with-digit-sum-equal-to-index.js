/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    let digitSum = function(blah){
        blah = Number(blah);
        let score = 0;
        while(blah > 0){
            score += blah%10;
            blah = Math.floor(blah/10);
        }
        return score;
    }
    for(let I = 0; I<nums.length; I++){
        let dSum = digitSum(nums[I]);
        if(dSum == I){
            return I;
        }
    }
    return -1;
};
