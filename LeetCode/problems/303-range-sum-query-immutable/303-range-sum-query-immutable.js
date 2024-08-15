/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    data = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    let score = 0;
    for(let I = left; I <= right; I++){
        score += data[I];
    }
    return score;
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */