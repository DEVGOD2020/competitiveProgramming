/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let myMap = new Map();
    myMap.set(0,1);
    let sum = 0;
    let score = 0;
    let I = 0;
    for(let num of nums){
        sum = (sum + num % k + k) % k;
        score += myMap.get(sum)|0;
        myMap.set( sum, (myMap.get(sum)|0) +1);
    }
    return score;
};