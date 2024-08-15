/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    return nums.filter( (el)=>{return el >= 10}).reduce(function(a,b){return a+b;},0) !==
    nums.filter( (el)=>{return el < 10} ).reduce(function(a,b){return a+b},0);
};