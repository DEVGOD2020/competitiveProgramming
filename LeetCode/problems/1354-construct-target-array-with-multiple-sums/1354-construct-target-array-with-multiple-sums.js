/**
 * @param {number[]} target
 * @return {boolean}
 */
var isPossible = function(target) {
    let pq = new MaxPriorityQueue();
    let size = target.reduce(function(a,b){return a+b;},0);
    for(let el in target){
        pq.enqueue(target[el]);
    }

    //console.log(pq.toArray());

    while(size > target.length){
        let val = pq.dequeue().element;
        size += -val;
        val += -size;
        size += val;
        if(val < 1){return false;}
        pq.enqueue(val);
    }

    return true;
};

//9 - (Sum-9)