function balanceThreeByThreeGrid(grid) {
    let need = [];
    let extra = [];

    for(let A = 0; A<grid.length; A++){
        for(let B = 0; B<grid.length; B++){
            if(grid[A][B] == 0){
                need.push([A,B]);
            }
            if(grid[A][B] > 1){
                for(let Z = 0; Z<grid[A][B]-1; Z++){
                    extra.push([A,B]);
                }
            }
        }
    }
    let ans = 1000;
    let backtrack = function(n=0,e=0,score=0){
        if(n >= need.length){ans = Math.min(ans, score); return 0;}
        for(let I = 0; I<extra.length; I++){
            if( (e&(1<<I)) == 0){
                e |= (1<<I);
                backtrack(n+1, e, score + Math.abs( need[n][0] - extra[I][0]) + Math.abs( need[n][1] - extra[I][1]) );
                e ^= (1<<I);
            }
        }
    }

    backtrack();
    return ans;
}
