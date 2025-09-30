/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function(points) {
    let shoelace = function(point1, point2, point3){
        let X = point1[0]*(point2[1]-point3[1]);
        let Y = point2[0]*(point3[1]-point1[1]);
        let Z = point3[0]*(point1[1]-point2[1]);
        return Math.abs(X+Y+Z)/2;
    }

    let score = 0;
    for(let A = 0; A<points.length-2; A++){
        for(let B = A+1; B<points.length-1; B++){
            for(let C = B+1; C<points.length; C++){
                score = Math.max(
                    score,
                    shoelace(
                        points[A],points[B],points[C]
                    )
                );
            }
        }
    }

    return score;
};
