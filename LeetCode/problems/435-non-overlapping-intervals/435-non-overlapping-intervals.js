/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort(function(a, b) { return a[1] - b[1]; });

    let ans = 0;
    let k = -Infinity;
    for(let a of intervals){
        if(a[0] >= k){
            k = a[1]
        }else{
            ans += 1;
        }
    }
    return ans;
};