/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    let queue = [];
    let pointer = 0;
    let visit = new Set();
    for(let row = 0; row<mat.length; row++){
        for(let col=0; col<mat[0].length; col++){
            if(mat[row][col] === 0){
                queue.push([row,col]);
            }else{
                mat[row][col] = -1;
            }
        }
    }

    let isBounds = function(row,col){
        return row >= 0 && col >= 0 && 
        row < mat.length && col < mat[0].length
        && mat[row][col] === -1;
    }

    while(pointer < queue.length){
        let [row,col] = queue[pointer];
        pointer++;

        let dirs = [[-1,0],[1,0],[0,-1],[0,1]];
        for(let dir of dirs){
            if( isBounds( row+dir[0], col+dir[1] ) ){
                queue.push( [row+dir[0], col+dir[1]] );
                mat[row+dir[0] ][ col+dir[1] ] = mat[row][col]+1;
            }
        }
    }

    return mat;
};