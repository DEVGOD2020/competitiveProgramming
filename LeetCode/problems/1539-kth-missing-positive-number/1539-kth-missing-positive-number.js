/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let L = 0;
    let R = arr.length;
    while(L<R){
        let M = Math.floor((L+R)/2);
        if(arr[M]-M-1 < k){
            L = M+1;
        }else{
            R = M;
        }
    }
    return R+k;
};
