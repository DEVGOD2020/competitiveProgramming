/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let mySet = new Set();
    for(let num of nums){
        if(num < k){
            return -1;
        }
        if(num > k){
            mySet.add(num);
        }
    }
    
    return mySet.size;
};