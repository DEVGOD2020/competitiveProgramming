/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDegrees = function(matrix) {
    let ans = [];
    for(let row of matrix){
        ans.push(_.sumBy(row));
    }
    return ans;
};
