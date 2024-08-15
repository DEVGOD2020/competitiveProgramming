/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var largestLocal = function(grid) {
    const N = grid.length;
    let maxLocal = Array(N-2).fill().map(()=>Array(N-2).fill());

    for(let X = 1; X < N-1; X++){
        for(let Y = 1; Y < N-1; Y++){
            maxLocal[X-1][Y-1] = highValue(grid,X,Y);
        }
    }

    return maxLocal;
};

function highValue(grid, X, Y){
    let high = 0;
    for(let A=X-1; A<=X+1; A++){
        for(let B=Y-1; B<=Y+1; B++){
                high = Math.max(high,grid[A][B]);
        }
    }
    return high;
}