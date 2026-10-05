function propagationTime(grid) {
    let score = 0;
    let clean = 0;
    let deq = new Deque();
    for(let row = 0; row<grid.length; row++){
        for(let col = 0; col<grid[0].length; col++){
            if( grid[row][col] == 2 ){
                deq.pushBack( [row,col] );
            }
            if(grid[row][col] == 1){
                clean++;
            }
        }
    }
    if(clean == 0){return 0;}
    let dirs = [ [1,0],[0,1],[-1,0],[0,-1] ];
    while(!deq.isEmpty()){
        score++;
        const SIZE = deq.size();
        for(let A = 0; A<SIZE; A++){
            let [row,col] = deq.popFront();
            for(let [X,Y] of dirs){
                if(row+X >= 0 && col+Y >= 0 && row+X < grid.length && col+Y < grid[0].length){
                    if(grid[row+X][col+Y] == 1){
                        deq.pushBack([row+X,col+Y]);
                        grid[row+X][col+Y] = 2;
                        clean--;
                    }
                }
            }
        }
    }

    if(clean == 0){return score-1;}
    return -1;
}