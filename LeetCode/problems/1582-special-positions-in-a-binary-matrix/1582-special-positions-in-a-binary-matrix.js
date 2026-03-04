/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    let row = new Array(mat.length).fill(0);
    let col = new Array(mat[0].length).fill(0);

    let score = 0;
    for(let R = 0; R<mat.length; R++){
        for(let C = 0; C<mat[0].length; C++){
            if(mat[R][C]){
                row[R]++; 
                col[C]++;
            }
        }
    }
    
    for(let R = 0; R<mat.length; R++){
        for(let C = 0; C<mat[0].length; C++){
            if(mat[R][C] && row[R] == 1 && col[C]==1){
                score++;
            }
        }
    }

    return score;
};
