/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let area = function(point1, point2, point3){
        let X = point1[0]*(point2[1]-point3[1]);
        let Y = point2[0]*(point3[1]-point1[1]);
        let Z = point3[0]*(point1[1]-point2[1]);
        return 0.5*Math.abs(X+Y+Z);
    }

    let max = 0;
    for(let A = 0; A<points.length-2; A++){
        for(let B = A+1; B<points.length-1; B++){
            for(let C = B+1; C<points.length; C++){
                max = Math.max(max,area(points[A],points[B],points[C]));
            }
        }
    }

    return max;
};