/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function(points) {
    let score = 0;
    let curPoint = points[0];
    for(let point of points){
        score += Math.abs(point[0]-curPoint[0])+Math.abs(point[1]-curPoint[1]);
        curPoint = point;
    }
    return score;
};