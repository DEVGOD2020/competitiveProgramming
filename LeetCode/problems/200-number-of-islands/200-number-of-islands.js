/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    
    let islands = 0;

    function dfs(Y, X){

        if(X < 0 || Y < 0 || X >= grid[0].length || Y >= grid.length || grid[Y][X] !== "1"){
            return 0;
        }

        grid[Y][X] = "A";

        dfs(Y-1,X);
        dfs(Y+1,X);
        dfs(Y,X-1);
        dfs(Y,X+1);
        return 1;
    }

    for(let Y = 0; Y<grid.length; Y++){
        for(let X = 0; X<grid[0].length; X++){
            if(grid[Y][X] === "1"){
                islands += dfs(Y,X);
            }
        }
    }
    return islands;
};