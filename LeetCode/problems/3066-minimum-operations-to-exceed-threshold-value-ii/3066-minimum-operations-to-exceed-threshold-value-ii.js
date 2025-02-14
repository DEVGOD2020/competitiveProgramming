/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    const PQ = new MinPriorityQueue();

    for(let num of nums){
        PQ.enqueue(num);
    }

    let score = 0;
    while(PQ.front().element < k){
        let x = PQ.dequeue()?.element || 0;
        let y = PQ.dequeue()?.element || 0;
        PQ.enqueue( Math.min(x,y)*2 + Math.max(x,y) );
        score++;
    }

    return score;
};