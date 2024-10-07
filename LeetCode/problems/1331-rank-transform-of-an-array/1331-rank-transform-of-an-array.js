/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function(arr) {
    let temp = _.sortBy( [...new Set(arr)] );
    let myMap = new Map();
    for(let I = 0; I<temp.length; I++){
        myMap.set(temp[I],I+1);
    }
    return arr.map( (el)=> myMap.get(el) );
};