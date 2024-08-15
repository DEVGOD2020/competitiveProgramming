/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    if(points.length == 1){return 1;}

    points.sort(
            function(a,b){
                if(a[0] == b[0]){
                    return a[1] - b[1];
                }else{
                    return a[0] - b[0];
                }
            }
        );

    let score = 1;
    let end = points[0][1];
    
    for(let I = 1; I<points.length; I++){
        if(points[I][0] > end){
            score++;
            end = points[I][1];
        }else{
            end = Math.min(end,points[I][1])
        }
    }

    return score;
};