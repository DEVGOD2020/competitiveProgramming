/**
 * @param {number[]} arr
 * @return {number}
 */
var findLengthOfShortestSubarray = function(arr) {
    let R = arr.length-1;
    while(R > 0 && arr[R-1] <= arr[R]){ R--; }
    if(R==0){return 0;}

    let score = R;

    let L = 0;
    while(L < arr.length && ( L==0 || arr[L-1] <= arr[L] ) ){
        while(R < arr.length && arr[L] > arr[R]){
            R++;
        }
        score = Math.min(score, R-L-1);
        L++;
    }

    return score;
};