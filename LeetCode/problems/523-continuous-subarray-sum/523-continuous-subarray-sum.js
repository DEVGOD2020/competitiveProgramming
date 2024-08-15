/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var checkSubarraySum = function(nums, k) {
    let sum = 0;
    let myMap = new Map();
    myMap.set(0,-1)
    for(let I=0; I<nums.length; I++){
        sum = (sum+nums[I])%k;
        if(myMap.has(sum)){
            if( I-myMap.get(sum) > 1){
                return true;
            }
        }else{
            myMap.set(sum,I);
        }
    }
    return false
};

//23,25,29,35,42

