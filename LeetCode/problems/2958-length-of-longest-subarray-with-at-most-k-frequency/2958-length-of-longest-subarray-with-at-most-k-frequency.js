/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let myMap = new Map();

    let L = 0;
    let max = 0;
    for(let R = 0; R< nums.length; R++){
        if(!myMap.has(nums[R])){
            myMap.set(nums[R],0);
        }
        myMap.set(nums[R],myMap.get(nums[R])+1);

        while( myMap.get(nums[R]) > k && L < R){
            myMap.set(nums[L], myMap.get(nums[L])-1 );
            L++;
        }

        if(max < (R-L)+1){
            max = (R-L)+1;
        }

        
    }

    return max;

};