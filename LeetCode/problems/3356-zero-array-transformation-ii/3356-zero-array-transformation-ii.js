/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var minZeroArray = function(nums, queries) {
    let sweep = new Array(nums.length+1).fill(0);

    let prefixSum = 0;
    let Q = 0;
    for(let I = 0; I<nums.length; I++){
        while(prefixSum + sweep[I] < nums[I]){
            if( Q >= queries.length){
                return -1;
            }

            let [left, right, val] = queries[Q++];

            if(right >= I){
                sweep[ Math.max(left,I)] += val;
                sweep[right+1] += -val;
            }
        }
        prefixSum += sweep[I];
    }
    return Q;
};