/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    const M = grid[0].length;
    let score = 0;
    for(let A = 0; A<grid.length; A++){
        grid[A].sort(function(a, b){return a - b});
    }
    
    for(let Z = 0; Z < M; Z++){
        let high = 0;
        for(let A = 0; A<grid.length; A++){
            let val = grid[A].pop();
            if(val > high){ high = val; }
        }

        score += high;
    }

    console.log(grid);
    return score;

};