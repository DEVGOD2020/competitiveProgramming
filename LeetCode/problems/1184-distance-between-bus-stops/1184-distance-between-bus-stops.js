/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
    const LEN = distance.length;
    let a = 0;
    let b = 0;

    I = start;
    while(I != destination){
        a += distance[I];
        I = ( (I+1)%LEN+LEN)%LEN;
    }

    I = start;
    while(I != destination){
        I = ( (I-1)%LEN+LEN)%LEN;
        b += distance[I];
    }

    return Math.min(a,b);
};
