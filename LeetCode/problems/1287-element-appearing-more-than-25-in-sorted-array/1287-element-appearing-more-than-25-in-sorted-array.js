/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    let k = Math.floor(arr.length/4);
    for(let I = 0; I<arr.length-k; I++){
        if(arr[I] == arr[I+k]){
            return arr[I];
        }
    }
    return -1;
};
