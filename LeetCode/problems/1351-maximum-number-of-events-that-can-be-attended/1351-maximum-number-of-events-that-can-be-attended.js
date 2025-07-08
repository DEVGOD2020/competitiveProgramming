/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
    let timeline = new MinPriorityQueue( (el)=> el[0] );

    for(let event of events){
        timeline.enqueue(event);
    }

    let end = new MinPriorityQueue( (el)=> el );
    let D = 1;
    let score = 0;
    while(!timeline.isEmpty() || !end.isEmpty()){
        while(!timeline.isEmpty() && D >= timeline.front()[0] ){
            end.enqueue(timeline.dequeue()[1] )
        }
        while(!end.isEmpty() && D > end.front()){
            end.dequeue();
        }
        if(!end.isEmpty()){
            end.dequeue();
            score++;
        }
        D++;
    }


    return score;
};
