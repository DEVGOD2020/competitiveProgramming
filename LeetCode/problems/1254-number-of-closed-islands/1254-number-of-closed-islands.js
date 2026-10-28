/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function(grid) {
    const M = grid.length;
    const N = grid[0].length;
    let dfs = function(row,col){
        if(row == 0 || col == 0 || row == M-1 || col == N-1){
            return grid[row][col] == 1;
        }
        if(grid[row][col] == 1){return true;}
        grid[row][col] = 1;
        let A = dfs(row-1,col);
        let B = dfs(row+1,col);
        let C = dfs(row,col-1);
        let D = dfs(row,col+1);
        return A&&B&&C&&D;
    }

    let score = 0;
    for(let A = 1; A<M-1; A++){
        for(let B = 1; B<N-1; B++){
            if(grid[A][B] == 0){ score += dfs(A,B); }
        }
    }

    return score;
};