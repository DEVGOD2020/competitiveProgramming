function longestIncreasingGridPath(grid) {
        const ROW = grid.length;
        const COL = grid[0].length;
        let DP = Array.from({length:ROW},()=>new Int32Array(COL).fill(1));
        let change = true;
        for(let I = 0; I<ROW; I++){
        change = false;
        for(let row = 0; row<ROW; row++){
            for(let col = 0; col<COL; col++){
                if( (grid[row-1]?.[col]??Infinity) < grid[row][col]){
                    DP[row][col] = Math.max(
                        DP[row][col],
                        (DP[row-1]?.[col]??0)+1
                    ); 
                    change = true;
                }
                if( (grid[row]?.[col-1]??Infinity) < grid[row][col]){
                    DP[row][col] = Math.max(
                        DP[row][col],
                        (DP[row]?.[col-1]??0)+1
                    );
                    change = true;
                }
            }
        }


        for(let row = grid.length-1; row>=0; row--){
            for(let col = 0; col<COL; col++){
                if( (grid[row+1]?.[col]??Infinity) < grid[row][col]){
                    DP[row][col] = Math.max(
                        DP[row][col],
                        (DP[row+1]?.[col]??0)+1
                    );
                    change = true;
                }
                if( (grid[row]?.[col-1]??Infinity) < grid[row][col] ){
                    DP[row][col] = Math.max(
                        DP[row][col],
                        (DP[row]?.[col-1]??0)+1
                    );
                    change = true;
                }
            }
        }

        for(let row = 0; row<ROW; row++){
            for(let col = grid[0].length-1; col>=0; col--){
                if( (grid[row-1]?.[col]??Infinity) < grid[row][col]){
                    DP[row][col] = Math.max(
                        DP[row][col],
                        (DP[row-1]?.[col]??0)+1
                    );
                    change = true;
                }
                if( (grid[row]?.[col+1]??Infinity) < grid[row][col]){
                    DP[row][col] = Math.max(
                        DP[row][col],
                        (DP[row]?.[col+1]??0)+1
                    );
                    change = true;
                }
            }
        }


        for(let row = grid.length-1; row>=0; row--){
            for(let col = grid[0].length-1; col>=0; col--){
                if( (grid[row+1]?.[col]??Infinity) < grid[row][col]){
                    DP[row][col] = Math.max(
                        DP[row][col],
                        (DP[row+1]?.[col]??0)+1
                    );
                    change = true;
                }
                if( (grid[row]?.[col+1]??Infinity) < grid[row][col] ){
                    DP[row][col] = Math.max(
                        DP[row][col],
                        (DP[row]?.[col+1]??0)+1
                    );
                    change = true;
                }
            }
        }
        if(change==false){break;}
    }

    let ans = 0;
    for(let row = 0; row<ROW; row++){
        for(let col = 0; col<COL; col++){
            ans = Math.max(ans,DP[row][col]);
        }
    }

    return ans;
}