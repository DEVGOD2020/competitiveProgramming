/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var zigzagTraversal = function(grid) {
    let X = 0;
    let Y = 0;
    let dir = true;
    let active = false;

    let ans = [ grid[0][0] ];
    while(Y < grid.length){
        X += dir?1:-1;
        
        if(X < 0){
            Y++;
            X++;
            dir = !dir;
        }
        if(X >= grid[0].length){
            Y++;
            X--;
            dir = !dir;
        }
        if(Y >= grid.length){
            break;
        }
        
        if(active){ans.push(grid[Y][X]); }
        active = !active;
    }

    return ans;
};