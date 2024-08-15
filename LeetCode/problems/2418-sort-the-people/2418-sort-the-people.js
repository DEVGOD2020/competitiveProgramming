/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const peopleQueue = new MaxPriorityQueue();

    for(let I in names){
        peopleQueue.enqueue(names[I],heights[I]);
    }

    return peopleQueue.toArray().map( function(el){return el['element']} );
};