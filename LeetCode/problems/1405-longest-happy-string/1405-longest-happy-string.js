/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function(a, b, c) {
    let PQ = new MaxPriorityQueue();
    PQ.enqueue("a",a);
    PQ.enqueue("b",b);
    PQ.enqueue("c",c);

    let str = "";
    while(PQ.size()){
        let temp = PQ.dequeue();

        if(PQ.size() > 0 && str.length >= 2 && 
        temp.element === str[str.length-2] && temp.element === str[str.length-1]){
            let el = PQ.dequeue();
            if(el.priority >= 1){
                str += el.element;
                PQ.enqueue(el.element,el.priority-1);
            }else{
                break;
            }
            PQ.enqueue(temp.element,temp.priority);
        }else{
            let el = temp;
            if(el.priority >= 1){
                str += el.element;
                PQ.enqueue(el.element,el.priority-1);
            }
        }
    }

    return str;
};