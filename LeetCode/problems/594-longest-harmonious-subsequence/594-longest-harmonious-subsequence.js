/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    let count = _.countBy(nums);
    let max = 0;
    for(let num of nums){
        if(count[num+1]){
            max = Math.max(max, count[num]+count[num+1]);
        }
    }
    return max;
};
