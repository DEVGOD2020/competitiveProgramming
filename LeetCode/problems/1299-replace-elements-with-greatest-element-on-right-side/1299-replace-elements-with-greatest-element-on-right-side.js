/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
    let max = -1;
    for(let I = arr.length-1; I>=0; I--){
        let temp = arr[I];
        arr[I] = max;
        max = Math.max(temp,max);
    }
    return arr;
};
