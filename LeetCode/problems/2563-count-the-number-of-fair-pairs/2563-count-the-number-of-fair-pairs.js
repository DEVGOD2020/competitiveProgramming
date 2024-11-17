/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */

var countFairPairs = function(nums, lower, upper) {
    nums = _.sortBy(nums);
    let score = 0;

    for(let I = 0; I<nums.length; I++){
        let low = _.sortedIndexBy(nums, lower-nums[I]);
        let high = _.sortedLastIndexBy(nums, upper-nums[I]) - 1;
        low = low > I ? low : I+1;
        if(I < high){
            score += high-low+1;
        }else{
            break;
        }
        
    }

    return score;
};