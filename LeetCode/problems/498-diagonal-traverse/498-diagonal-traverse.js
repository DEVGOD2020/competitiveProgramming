/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function(mat) {
    let myMap = new Map();
    for(let row = 0; row<mat.length; row++){
        for(let col = 0; col<mat[0].length; col++){
            if(!myMap.has(row+col) ){
                myMap.set(row+col,[]);
            }
            if( (row+col)%2 ){
                myMap.get(row+col).push(mat[row][col]);
            }else{
                myMap.get(row+col).unshift(mat[row][col]);
            }
        }
    }
    return [...myMap.values()].flat();
};
