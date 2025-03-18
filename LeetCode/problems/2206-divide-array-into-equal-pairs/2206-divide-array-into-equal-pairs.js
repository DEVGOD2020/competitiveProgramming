/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    return Object.values(_.countBy(nums)).every( (el)=>el%2==0);
};