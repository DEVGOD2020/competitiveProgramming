/**
 * @param {number[]} nums
 * @return {boolean}
 */
var xorGame = function(nums) {
    let start = nums.reduce((sum,el)=>sum^el);
    if(start == 0){return true;}
    return nums.length%2==0;
};
