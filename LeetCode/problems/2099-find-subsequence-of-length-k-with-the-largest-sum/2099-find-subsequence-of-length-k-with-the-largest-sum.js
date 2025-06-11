/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSubsequence = function(nums, k) {
    let maxPQ = new MinPriorityQueue( (el)=>nums[el]);

    for(let I = 0; I<nums.length; I++){
        maxPQ.enqueue(I);
        if(maxPQ.size() > k){
            maxPQ.dequeue();
        }
    }

    return maxPQ.toArray().sort((a,b)=>a-b).map( (el)=> nums[el]);
};
