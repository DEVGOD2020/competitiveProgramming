/**
 * @param {number[][]} items1
 * @param {number[][]} items2
 * @return {number[][]}
 */
var mergeSimilarItems = function(items1, items2) {
    let myMap = new Map();
    for(let item of items1){
        myMap.set(item[0], (myMap.get(item[0])|0) + item[1] );
    }
    for(let item of items2){
        myMap.set(item[0], (myMap.get(item[0])|0) + item[1] );
    }
    return [...myMap].sort( (a,b)=> a[0]-b[0] );
};
