/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    return nums.reduce( 
        (sum,el,I)=> sum += (nums.length%(I+1)) == 0 ? el**2 : 0
        ,0
    );
};
