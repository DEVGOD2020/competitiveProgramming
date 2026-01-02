/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    let valid = new Set([
        276_91_438,
        294_73_618,

        438_91_276,
        492_37_816,

        618_73_294,
        672_19_834,

        816_37_492,
        834_19_672
    ]);

    const test = [ 
        [-1,-1],[-1,0],[-1,1],
        [0,-1],[0,1],
        [1,-1],[1,0],[1,1],
    ];
    let check = function(row,col){
        if(grid[row][col] !== 5){return false;}

        let val = 0;
        if(grid[row][col] == 5){
            for(let [x,y] of test){
                val = (val*10) + grid[row+x][col+y];
            }
        }
        if(valid.has(val)){return true;}
        return false;
    }

    let score = 0;
    for(let row = 1; row<grid.length-1; row++){
        for(let col = 1; col<grid[0].length-1; col++){
            score += +(check(row,col));
        }
    }
    return score;
};
