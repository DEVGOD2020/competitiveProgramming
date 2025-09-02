/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfPairs = function(points) {
    points.sort( 
        (a,b)=>{
            return a[0] == b[0] ? b[1]-a[1] : a[0]-b[0]
        }
    );

    let score = 0;
    for(let I = 0; I<points.length; I++){
        let left = points[I];
        let maxY = -10e9;
        for(let R = I+1; R<points.length; R++){
            let right = points[R];
            if( left[0] <= right[0] && left[1] >= right[1]){
                if(maxY < right[1]){
                    maxY = Math.max(maxY,right[1]);
                    score++;
                }
            }
        }
    }

    return score;
};
