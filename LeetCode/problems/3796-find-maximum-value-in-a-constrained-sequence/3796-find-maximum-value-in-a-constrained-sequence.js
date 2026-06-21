/**
 * @param {number} n
 * @param {number[][]} restrictions
 * @param {number[]} diff
 * @return {number}
 */
var findMaxVal = function(n, restrictions, diff) {
    let arr = new Array(n);
    arr[0] = 0;
    for(let [A,B] of restrictions){
        arr[A] = B;
    }
    for(let I = 0; I<arr.length-1; I++){
        arr[I+1] = Math.min(
            arr[I+1] ?? Infinity, 
            arr[I]+diff[I]
        );
    }
    for(let I = arr.length-1; I>0; I--){
        arr[I-1] = Math.min(
            arr[I-1] ?? Infinity, 
            arr[I]+diff[I-1]
        );
    }
    return Math.max(...arr);
};