/**
 * @param {number[][]} mat
 * @param {number[][]} target
 * @return {boolean}
 */
var findRotation = function(mat, target) {
    let rotate = function(){
        for(let R = 0; R<mat.length; R++){
            for(let C = R+1; C<mat.length; C++){
                [mat[R][C], mat[C][R]] = [mat[C][R], mat[R][C]]
            }
        }
        mat.map( (row)=> row.reverse() );
    }

    for(let I = 0; I<4; I++){
        rotate();
        if(mat.toString() === target.toString()){
            return true;
        }
    }

    return false;
};
