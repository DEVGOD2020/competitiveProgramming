/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let j = 0;
    for( let n of nums ){
       if( n !== val ){
            nums[j++] = n;
       }
    }

    return j;
};