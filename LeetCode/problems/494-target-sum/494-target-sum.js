/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    let sums = new Map(
        [
            [0,1]
        ]
    );

    for(let num of nums){
        const row = new Map();

        for(let [sum,count] of sums){
            row.set(sum+num, (row.get(sum+num)|0) + count)
            row.set(sum-num, (row.get(sum-num)|0) + count)
        }

        sums = row;
    }
    return sums.get(target)|0;
};