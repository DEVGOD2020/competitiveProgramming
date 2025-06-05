/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var diagonalSort = function(mat) {
    let myMap = new Map();
    let mySet = new Set();
    for(let row = 0; row<mat.length; row++){
        for(let col = 0; col<mat[0].length; col++){
            if(!myMap.has(row-col) ){
                myMap.set(row-col, new Array());
                mySet.add(row-col);
            }
            myMap.get(row-col).push(mat[row][col]);
        }
    }

    for(let blah of [...mySet] ){
        myMap.set(blah, myMap.get(blah).sort((a,b)=>a-b) );
    }

    for(let row = mat.length-1; row>= 0; row--){
        for(let col = mat[0].length-1; col>=0; col--){
            mat[row][col] = myMap.get(row-col).pop();
        }
    }

    return mat;
};
