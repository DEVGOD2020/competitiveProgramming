/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
    let ans = 0;
    let mat = Array.from({length:n},()=>Array(n).fill('.'));
    let qRow = new Set();
    let d1 = new Set();
    let d2 = new Set();
    let backtrack = function(col){
        if(col == n){
            ans++;
            return 0;
        }
        for(let row = 0; row<n; row++){
            if(qRow.has(row)){continue;}
            if(d1.has(row+col)){continue;}
            if(d2.has(row-col)){continue;}

            mat[row][col] = "Q";

            qRow.add(row);
            d1.add(row+col);
            d2.add(row-col);

            backtrack(col+1);

            mat[row][col] = ".";

            qRow.delete(row);
            d1.delete(row+col);
            d2.delete(row-col);
        }
    }

    backtrack(0);
    return ans;
};
