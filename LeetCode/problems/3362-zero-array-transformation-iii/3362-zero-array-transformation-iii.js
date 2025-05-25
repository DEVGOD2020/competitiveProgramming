/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number}
 */
var maxRemoval = function(nums, queries) {
    queries.sort((a,b)=>a[0]-b[0]);

    const MaxPQ = new MaxPriorityQueue();
    const lineSweep = new Array(nums.length+1).fill(0);

    let prefixSum = 0;

    let Q = 0;
    for(let I = 0; I<nums.length; I++){
        prefixSum += lineSweep[I];
        while(Q<queries.length && queries[Q][0] === I){
            MaxPQ.enqueue(queries[Q][1]);
            Q++;
        }
        while(prefixSum < nums[I] && !MaxPQ.isEmpty() && MaxPQ.front() >= I){
            prefixSum += 1;
            lineSweep[MaxPQ.pop()+1] += -1;
        }
        if(prefixSum < nums[I]){
            return -1;
        }
    }

    return MaxPQ.size();
};
