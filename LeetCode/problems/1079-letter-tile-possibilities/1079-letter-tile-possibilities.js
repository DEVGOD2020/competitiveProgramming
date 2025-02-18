/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function(tiles) {
    let score = 0;

    let arr = [];
    let visit = new Array(tiles.length).fill(false);

    tiles = tiles.split("").sort().join("");
    let backtrack = function(I=0){
        score += +(arr.length>0);
        if(arr.length === tiles.length){
            return;
        }
        for(let T = 0; T<tiles.length; T++){
            if(visit[T]){continue;}
            if(T>0 && tiles[T] == tiles[T-1] && !visit[T-1]){continue;}
            arr.push(tiles[T]);
            visit[T] = true;

            backtrack(I+1);

            arr.pop();
            visit[T] = false;
        }
    }

    backtrack();

    return score;
};
