/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let dirs = [[0,1],[1,0],[0,-1],[-1,0]];
    let colSize = matrix[0].length;
    let rowSize = matrix.length;

    function checkOutBounds(x,y){
        return x<0 || y<0 || x>=rowSize || y>=colSize || matrix[x][y] == '.';
    }

    let res = [ matrix[0][0]];
    matrix[0][0] = '.';

    let row = 0;
    let col = 0;
    for(let I = 0, Z=0; I<rowSize*colSize-1;){
        let dir = dirs[Z%4]
        if(checkOutBounds(row+dir[0],col+dir[1])){
            Z++;
            continue;
        }

        row += dir[0];
        col += dir[1];
        res.push( matrix[row][col]);
        matrix[row][col] = '.';
        I++;
    }

    return res;
};