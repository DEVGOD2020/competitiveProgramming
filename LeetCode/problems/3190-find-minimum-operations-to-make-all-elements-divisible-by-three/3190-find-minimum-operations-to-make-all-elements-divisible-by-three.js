/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let counter = 0;
    for(let A of nums){
        if(A%3 > 0){
            counter += Math.min( A%3, 3-A%3);
        }
    }
    return counter;
};