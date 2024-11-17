/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var shortestSubarray = function(nums, k) {
    let minRange = Infinity;

    let minPQ = new MinPriorityQueue();
    let prefixSum = 0;
    for(let I = 0; I <nums.length; I++){
        prefixSum += nums[I];
        if(prefixSum >= k){
            minRange = Math.min(minRange, I+1)
        }

        while(!minPQ.isEmpty() && prefixSum-minPQ.front()['priority'] >= k){
            minRange = Math.min(minRange, I-minPQ.dequeue()['element'])
        }

        minPQ.enqueue(I, prefixSum);
    }

    return minRange !== Infinity ? minRange : -1;
};