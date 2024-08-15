/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number}
 */
var longestSubarray = function(nums, limit) {
    let minPQ = new MinPriorityQueue();
    let maxPQ = new MaxPriorityQueue();

    let L = 0;
    let R = 0;
    let maxLen = 0;
    while(R<nums.length){
        minPQ.enqueue(R,nums[R]);
        maxPQ.enqueue(R,nums[R]);

        while( Math.abs(minPQ.front()["priority"]-maxPQ.front()["priority"]) > limit){
            L = Math.min(minPQ.front()["element"],maxPQ.front()["element"])+1;
            while( minPQ.front()["element"] < L){
                minPQ.dequeue();
            }
            while( maxPQ.front()["element"] < L){
                maxPQ.dequeue();
            }
        }

        maxLen = Math.max(maxLen, R-L+1);
        R++;
    }

    return maxLen;

};