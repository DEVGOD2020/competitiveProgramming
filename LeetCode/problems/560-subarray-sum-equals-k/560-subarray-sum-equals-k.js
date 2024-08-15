/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let myMap = new Map();
    let prefixSum = 0;
    myMap.set(0,1);
    let score = 0;
    for(let I in nums){
        prefixSum += nums[I];

        if(myMap.has(prefixSum-k)){
            score += myMap.get(prefixSum-k);
        }
        if(!myMap.has(prefixSum)){
            myMap.set(prefixSum,0);
        }
        myMap.set(prefixSum, myMap.get(prefixSum)+1);
    }
    
    return score;
};