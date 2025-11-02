var countUnguarded = function(m, n, guards, walls) {
    const Z = 316*316;
    let wallSet = new Set();
    let visitSet = new Set();
    let score = (m * n) - walls.length - guards.length;

    for(let [row,col] of walls){
        wallSet.add(row*Z + col);
    }
    for(let [row,col] of guards){
        wallSet.add(row*Z + col);
    }

    const DIRS = [ [0,1],[1,0],[0,-1],[-1,0] ];

    for(let [dr,dc] of DIRS){
        for(let [row,col] of guards){
            row += dr; col += dc;
            while( row >= 0 && row < m && col >= 0 && col < n ){
                if( wallSet.has(row*Z + col) ){break;}
                if( !visitSet.has(row*Z + col) ){
                    visitSet.add( row*Z + col);
                    score--;
                }
                row += dr; col += dc;
            }
        }
    }

    return score;
};
