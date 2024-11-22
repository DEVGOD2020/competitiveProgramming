/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} guards
 * @param {number[][]} walls
 * @return {number}
 */
var countUnguarded = function(m, n, guards, walls) {
    let grid = Array.from({ length: m }, () => Array(n).fill(0));
    let score = 0;

    for(let wall of walls){
        grid[wall[0]][wall[1]] = -1;
        score++;
    }

    for(let guard of guards){
        grid[guard[0]][guard[1]] = 2;
        score++;
    }

    let test = function(row, col){
        if(grid[row][col] == 2){
                canSee = true;
            }else if(grid[row][col] == -1){
                canSee = false;
            }
            if(canSee && grid[row][col] == 0){
                grid[row][col] = 1;
                score++;
            }
    }

    for(let row = 0; row<m; row++){
        var canSee = false;
        for(let col = 0; col<n; col++){
            test(row,col);
        }
        var canSee = false;
        for(let col = n-1; col>=0; col--){
            test(row,col);
        }
    }

    for(let col = 0; col<n; col++){
        var canSee = false;
        for(let row=0; row<m; row++){
            test(row,col);
        }
        var canSee = false;
        for(let row=m-1; row>=0; row--){
            test(row,col);
        }
    }

    return (m*n)-score;

};