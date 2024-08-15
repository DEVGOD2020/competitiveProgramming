/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    let heap = new MinPriorityQueue();

    for(let A = 0; A<n; A++){
        for(let B = A; B<n; B++){
            heap.enqueue( nums.slice(A,B+1).reduce(function(a,b){return a+b;}));
        }
    }

    let score = 0;

    let I = 1;
    while(I<right+1){
        let val = heap.dequeue().element;
        if(I >= left){
            score += val;
        }
        I++;
    }

    return score%(10**9+7);
};