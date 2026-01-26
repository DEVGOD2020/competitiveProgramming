/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    arr = arr.sort( (a,b)=>a-b);
    let min = Infinity;
    for(let I = 0; I<arr.length-1; I++){
        min = Math.min(min, Math.abs(arr[I+1] - arr[I]) );
    }
    let ans = [];
    for(let I = 0; I<arr.length-1; I++){
        if( Math.abs(arr[I+1] - arr[I]) == min ){
            ans.push( [arr[I], arr[I+1]] );
        }
    }
    return ans;
};
