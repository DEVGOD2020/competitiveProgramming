/**
 * @param {number[]} nums
 * @return {number}
 */
var countValidSelections = function(nums) {
    let prefixSums = [nums[0]];
    for(let I = 1; I<nums.length; I++){
        prefixSums[I] = prefixSums[I-1]+nums[I];
    }

    let score = 0;
    for(let I = 0; I<nums.length; I++){
        if(nums[I] > 0){continue;}
        let target = prefixSums[nums.length-1]-prefixSums[I];
        if(prefixSums[I] === target){
            score += 2;
        }
        if(prefixSums[I] === target-1){
            score += 1;
        }
        if(prefixSums[I] === target+1){
            score += 1;
        }
    }

    return score;
};
