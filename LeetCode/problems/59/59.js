/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let matrix = Array.from({length:n}, (el)=>new Array(n).fill(0));

    let dirs = [[0,1],[1,0],[0,-1],[-1,0]];
    let dir = dirs[0];

    let row = 0
    let col = 0;

    function checkBound(x,y){
        return x>=0 && y>= 0 && x < n && y < n && matrix[x][y] == 0;
    }

    for(let I = 1, Z=0; I<n*n && Z<100; I++){
        while( !checkBound(row+dir[0],col+dir[1]) ){
            dir = dirs[Z%4];
            Z++;
        }
        matrix[row][col] = I;
        row += dir[0];
        col += dir[1];
    }

    matrix[row][col] = n*n;

    return matrix;
};