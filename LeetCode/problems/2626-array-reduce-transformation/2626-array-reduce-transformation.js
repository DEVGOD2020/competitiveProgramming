/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
 
var reduce = function(nums, fn, init) {
    for(value of nums){
      init = fn(init, value);
    }
    return init;
};