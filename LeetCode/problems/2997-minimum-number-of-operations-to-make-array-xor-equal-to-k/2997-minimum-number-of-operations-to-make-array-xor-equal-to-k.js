/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let all = nums[0];
    for(let I = 1; I<nums.length; I++){
        all = all ^ nums[I];
    }

    let count = 0;
    let max = Math.max(all,k);
    let min = Math.min(all,k);
    while(max > 0){
        if( (max&1) !== (min&1) ){
            count++;
        }
        
        max >>= 1;
        min >>= 1;
    }

    return count;
};

//111
//011

//11
//01

//1
//0

