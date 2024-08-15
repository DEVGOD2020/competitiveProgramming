/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    const stoneQ = new MaxPriorityQueue();

    for(a of stones){
        stoneQ.enqueue(a);
    }

    while(stoneQ.size() > 1){
        let A = stoneQ.dequeue()['element'];
        let B = stoneQ.dequeue()['element'];
        if(A!==B){
            stoneQ.enqueue(A-B);
        }
    }

    if(stoneQ.size() < 1){return 0;}
    return stoneQ.front()['element'];
};