/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} indices
 * @return {number}
 */
var oddCells = function(m, n, indices) {
    let row = new Array(m).fill(0);
    let col = new Array(n).fill(0);

    let oddRows = 0;
    let oddCols = 0;
    for(let [R,C] of indices){
        row[R]++;
        col[C]++;
        if(row[R]%2){oddRows++;}else{oddRows--;}
        if(col[C]%2){oddCols++;}else{oddCols--;}
    }

    return oddRows*(n-oddCols) + oddCols*(m-oddRows);
};
