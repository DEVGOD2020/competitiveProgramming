/**
 * @param {number[]} nums
 * @return {number}
 */
var specialTriplets = function(nums) {
    const MOD = 1e9 + 7;
    let myMap = new Map();
    for(let I = 0; I<nums.length; I++){
        if(!myMap.has(nums[I])){
            myMap.set(nums[I],[]);
        }
        myMap.get(nums[I]).push(I);
    }

    let score = 0;
    for(let I = 1; I<nums.length-1; I++){
        let arr = myMap.get(nums[I]*2);
        let L = _.sortedIndex(arr, I);
        if(arr){
            score += (
                L * (arr.length-L- (nums[I]==0?1:0) ) 
            )%MOD;
            score %= MOD;
        }
    }

    return score;
};
