/**
 * @param {number[]} arr
 * @param {number[][]} mat
 * @return {number}
 */
var firstCompleteIndex = function(arr, mat) {
    let myMap = new Map();
    for(let row = 0; row<mat.length; row++){
        for(let col = 0; col<mat[0].length; col++){
            myMap.set(mat[row][col], [row,col]);
        }
    }

    let rows = new Array(mat.length).fill(0);
    let cols = new Array(mat[0].length).fill(0);

    for(let I = 0; I<arr.length; I++){
        let [R,C] = myMap.get(arr[I]);
        rows[R]++;
        cols[C]++;
        if(rows[R] === mat[0].length || cols[C] === mat.length){
            return I;
        }
    }

    return -1;
};