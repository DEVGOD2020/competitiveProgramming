/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var valueAfterKSeconds = function(n, k) {
    let arr = new Array(n).fill(1);
    for(let A = 0; A<k; A++){
        for(let B=1; B<n; B++){
            arr[B] = (arr[B]+arr[B-1])%(10**9 + 7);
        }
    }

    return arr[n-1]%(10**9 + 7);
}