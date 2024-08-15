/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestDistancePair = function(nums, k) {
    let PQ = new MaxPriorityQueue();
    for(let A = 0; A<nums.length; A++){
        for(let B = A+1; B<nums.length; B++){
            let val = Math.abs(nums[A] - nums[B]);
            if(PQ.size() < k || PQ.front()['element'] > val){
                PQ.enqueue(val);
                if(PQ.size() > k){
                    PQ.dequeue();
                }
            }
        }
    }
    
    return PQ.front()['element'];
};