/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
    nums.sort( (a,b)=>a-b);
    
    let chunked = _.chunk(nums, 3);
    for(let chunk of chunked){
        if(chunk[2] - chunk[0] > k){
            return [];
        }
    }

    return chunked;
};
