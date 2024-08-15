/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var numberOfSubarrays = function(nums, k) {

    function atMost(bruh){
        let score = 0;
        let total = 0;
        let L = 0;
        for(let R = 0; R<nums.length; R++){
            total += nums[R]%2;
            while(total > bruh){
                total += -nums[L]%2;
                L++;
            }
            score += R-L+1;
        }
        return score;
    }

    return atMost(k)-atMost(k-1);
};

var numberOfSubarrays2 = function(nums, k) {
    let myMap = new Map();
    let prefixSum = 0;
    let score = 0;
    myMap.set(0,1);
    for(let I in nums){
        if(nums[I]%2 === 1){
            prefixSum++;
        }
        if(myMap.has(prefixSum-k)){
            score += myMap.get(prefixSum-k);
        }
        myMap.set( prefixSum, (myMap.get(prefixSum)|0) + 1);
    }

    console.log(myMap);

    return score;
};