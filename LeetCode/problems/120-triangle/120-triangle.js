/**
 * @param {number[][]} triangle
 * @return {number}
 */

var minimumTotal = function(triangle){
    let I = triangle.length-1;
    while(I > 0){
        for(let X = 0; X<triangle[I-1].length; X++){
            triangle[I-1][X] += Math.min(triangle[I][X],triangle[I][X+1]);
        }
        I += -1;
    }
    
    return triangle[0][0];
};

