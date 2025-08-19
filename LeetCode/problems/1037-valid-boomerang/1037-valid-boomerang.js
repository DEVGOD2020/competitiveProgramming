/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    let A = (points[0][1] - points[1][1]);
    let B = (points[0][0] - points[1][0]);
    let C = (points[1][1] - points[2][1]);
    let D = (points[1][0] - points[2][0]);
    let slope1 = A * D;
    let slope2 = C * B;
    return slope1 !== slope2;
};
