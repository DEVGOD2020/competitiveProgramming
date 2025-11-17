/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    arr.sort( (a,b)=>a-b);
    let blah = arr[1]-arr[0];
    for(let I = 1; I<arr.length; I++){
        if(arr[I]-arr[I-1] !== blah){return false}
    }
    return true;
};
