/**
 * @param {number[]} barcodes
 * @return {number[]}
 */
var rearrangeBarcodes = function(barcodes) {
    let PQ = new MaxPriorityQueue();
    let freqMap = _.toPairs(_.countBy(barcodes));
    for(let freq of freqMap){
        PQ.enqueue(freq[0],freq[1]);
    }

    let ans = [];
    while(!PQ.isEmpty()){
        let firstNode = PQ.dequeue();
        let secondNode = PQ.dequeue();

        ans.push(firstNode.element);

        if(secondNode){
            ans.push(secondNode.element);
            if(secondNode.priority-1 > 0){
                PQ.enqueue(secondNode.element,secondNode.priority-1);
            }
        }

        if(firstNode.priority-1 > 0){
            PQ.enqueue(firstNode.element,firstNode.priority-1);
        }
    }
    
    return ans;
};