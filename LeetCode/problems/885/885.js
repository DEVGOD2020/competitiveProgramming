/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, cStart) {

    function checkBounds(x,y){
        return x>=0 && y>=0 && x<rows && y<cols;
    }

    let dirs = [[0,1],[1,0],[0,-1],[-1,0]];
    let row = rStart;
    let col = cStart;
    let res = [[rStart,cStart]];
    for(let I = 0, Z = 0; Z<(rows*cols)-1; I++){
        let dir = dirs[I%4];
        let moves = Math.floor(I/2)+1;
        for(let A = 0; A<moves; A++){
            row += dir[0];
            col += dir[1];
            if( checkBounds(row, col) ){
                res.push( [row, col])
                Z++;
            }
        }
    }

    return res;
};