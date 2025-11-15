/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[][]}
 */
var rangeAddQueries = function (n, queries) {
    let sweep = Array.from({ length: n+1 }, () => new Array(n+1).fill(0));
    for (let [row1, col1, row2, col2] of queries) {
        sweep[row1][col1]++;

        sweep[row2 + 1][col1]--;
        sweep[row1][col2 + 1]--;

        sweep[row2+1][col2+1]++;
    }

    let res = Array.from( {length:n}, ()=> new Array(n).fill(0) );
    for (let R = 0; R < n; R++) {
        for (let C = 0; C < n; C++) {
            res[R][C] = sweep[R][C];
            res[R][C] += res[R-1]?.[C]||0;
            res[R][C] += res[R][C-1]||0;
       
            res[R][C] -= res[R-1]?.[C-1]||0;
        }
    }

    return res;
};
