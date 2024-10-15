/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    let people = [];
    for(let I = 0; I<times.length; I++){
        people.push([I,[...times[I]]]);
    }
    people = _.sortBy(people, (el)=>el[1][0]);

    let openChairs = new MinPriorityQueue();
    let filledChairs = new MinPriorityQueue( {priority: x => x[0][1][1]} );

    for(let I = 0; I<times.length; I++){
        openChairs.enqueue(I);
    }

    for(let P of people){
        let arrive = P[1][0];
        let leave = P[1][1];

        //Leaving
        while(filledChairs.size() && 
        filledChairs.front().element[0][1][1] <= arrive){
            openChairs.enqueue(filledChairs.front().element[1]);
            filledChairs.dequeue();
        } 

        let nextChair = openChairs.dequeue().element;
        if(P[0] == targetFriend){return nextChair;}
        filledChairs.enqueue( [P,nextChair]);
    }

    return -1;
};