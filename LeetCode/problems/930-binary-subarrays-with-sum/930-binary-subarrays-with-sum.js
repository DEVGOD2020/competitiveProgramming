/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function(nums, goal) {
    
    let myMap = new Map();
    let prefixSum = 0;
    myMap.set(0,1);
    let score = 0;
    for(let I in nums){
        prefixSum += nums[I];

        if(myMap.has(prefixSum-goal)){
            score += myMap.get(prefixSum-goal);
        }
        if(!myMap.has(prefixSum)){
            myMap.set(prefixSum,0);
        }
        myMap.set(prefixSum, myMap.get(prefixSum)+1);
    }
    
    return score;
};