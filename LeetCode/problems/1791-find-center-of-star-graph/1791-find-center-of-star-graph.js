/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let myMap = new Map();

    for(let edge of edges){
        myMap.set( edge[0], (myMap.get(edge[0])|0) + 1);
        myMap.set( edge[1], (myMap.get(edge[1])|0) + 1);
    }

    for(let [key,val] of myMap.entries()){
        if(val == edges.length){
            return key;
        }
    }
    return -1;
};