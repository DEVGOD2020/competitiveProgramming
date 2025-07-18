/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
    const N = arr.length;
    if(N < 3){return false;}

    let L = 0;
    while(arr[L] < arr[L+1]){ L++; }

    if(L == 0 || L == N-1){return false;}

    while(arr[L] > arr[L+1]){ L++; }

    return L==N-1;
};
