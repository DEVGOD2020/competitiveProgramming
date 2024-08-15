/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    points.sort(function(a,b){return a[0] - b[0]; });

    let max = -Infinity;
    for(let I = 0; I<points.length-1; I++){
        if(points[I+1][0] - points[I][0] > max){
            max = points[I+1][0] - points[I][0];
        }
    }

    return max;
};