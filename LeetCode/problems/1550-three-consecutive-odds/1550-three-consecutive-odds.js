/**
 * @param {number[]} arr
 * @return {boolean}
 */
var threeConsecutiveOdds = function(arr) {
    for(let I =0; I<arr.length-2; I++){
        if(arr[I]%2 === 1 && arr[I+1]%2 === 1 && arr[I+2]%2 === 1){
            return true;
        }
    }
    return false;
};