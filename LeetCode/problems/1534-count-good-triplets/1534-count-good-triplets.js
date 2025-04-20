/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function(arr, a, b, c) {
    let ans = 0;
    for(let L = 0; L<arr.length-2; L++){
        for(let M = L+1; M<arr.length-1; M++){
            if(Math.abs(arr[L]-arr[M]) <= a){
                for(let R = M+1; R<arr.length; R++){
                    if( 
                    Math.abs(arr[M]-arr[R]) <= b && 
                    Math.abs(arr[L] - arr[R]) <= c
                    ){
                        ans++;
                    }
                }
            }
        }
    }
    return ans;
};