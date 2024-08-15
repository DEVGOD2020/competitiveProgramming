/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function(arr) {
    if(arr.length == 2){return true;}
    arr.sort(function(a, b) {return a - b;});
    const slope = Math.abs(arr[1]-arr[0]);
    arr.shift();

    const size = arr.length-1;
    for(let A = 0; A < size; A++){
        let newSlope = Math.abs(arr[A+1]-arr[A]);
        if(newSlope !== slope){
            return false;
        }
    }
    return true;
};