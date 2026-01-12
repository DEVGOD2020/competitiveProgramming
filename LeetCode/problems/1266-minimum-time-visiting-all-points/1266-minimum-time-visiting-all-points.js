/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let ans = 0;
    for(let I = 1; I<points.length; I++){
        let A =  Math.abs( points[I][0] - points[I-1][0] );
        let B = Math.abs( points[I][1] - points[I-1][1] );
        ans += Math.max(A,B);
    }
    return ans;
};
