/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarraySum = function(nums, k) {
    let myMap = new Map();
    let pre = 0;
    let score = -Infinity;

    myMap.set(0,0);
    for(let I = 0; I<nums.length; I++){
        let ID = (I+1)%k;
        pre += nums[I];
        if( myMap.has(ID) ){
            score = Math.max(score,pre-myMap.get( ID ));
        }
        myMap.set( ID, 
            Math.min(pre, (myMap.get( ID )??Infinity) ) 
        );
    }

    return score;
};
