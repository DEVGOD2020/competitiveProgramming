/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    let A = 0;
    let B = 0;
    for(let num of nums){
        if(num<target){A++;}
        if(num==target){B++;}
    }
    return _.range(A,A+B);
};