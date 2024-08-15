/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    const PQ = new PriorityQueue({
        compare: (e1, e2) => {
            if (e1.c < e2.c) return -1;
            if (e1.c > e2.c) return 1;
            return e1.p < e2.p ? 1 : -1;
        }
    });

    for(let el in profits){
        PQ.enqueue({'p':profits[el], "c":capital[el]});
    }
    
    const stonksPQ = new MaxPriorityQueue();

    let I = 0
    while(k>0){
        while(!PQ.isEmpty() && PQ.front().c <= w){
            stonksPQ.enqueue(PQ.dequeue().p);
        }
        if(stonksPQ.isEmpty()){
            break;
        }
        w += stonksPQ.dequeue()["element"];
        k--;
    }

    return w;
};