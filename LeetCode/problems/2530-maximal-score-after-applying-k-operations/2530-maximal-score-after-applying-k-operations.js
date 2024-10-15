/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function(nums, k) {
    let PQ = new MaxPriorityQueue();

    for(let num of nums){
        PQ.enqueue(num);
    }

    let I = 0;
    let score = 0;
    while(I<k){
        let val = PQ.dequeue().element;
        score += val;
        PQ.enqueue( Math.ceil(val / 3));
        I++;
    }

    return score;
};