/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let hash = {};
    let score = 0;
    let max = 0;
    for(let num of nums){
        if(!hash[num]){
            hash[num] = 0;
        }
        hash[num]++;
        if(hash[num] > max){
            max = hash[num];
        }
    }

    for(let key in hash){
        if(hash[key] == max){
            score += max;
        }

    }

    return score;
};