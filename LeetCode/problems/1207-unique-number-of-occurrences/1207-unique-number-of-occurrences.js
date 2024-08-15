/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let dataSet = new Set();
    let dataMap = new Map();

    for(let a of arr){
        dataMap.set(a, dataMap.get(a) === undefined ? 1 : dataMap.get(a)+1);
    }

    for(let a of dataMap.values()){
        if(dataSet.has(a)){
            return false;
        }
        dataSet.add(a);
    }

    return true;
};