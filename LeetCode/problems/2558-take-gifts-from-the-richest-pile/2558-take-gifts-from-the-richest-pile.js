/**
 * @param {number[]} gifts
 * @param {number} k
 * @return {number}
 */

var memo = {};
var pickGifts = function(gifts, k) {
    const heap = new MaxPriorityQueue();
    
    for(a of gifts){
        heap.enqueue(a);
    }

    let I = 0;
    while(I < k){
        const val = heap.dequeue()['element'];
        if(memo[val] === undefined){
            memo[val] = Math.floor(Math.sqrt(val));
        }
        const newVal = memo[val];
        heap.enqueue(newVal);
        I++;
    }

    let score = 0;
    const arr = heap.toArray()
    for(a of arr){
        score += a['element'];
    }

    return score;
};