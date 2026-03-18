/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var getBiggestThree = function(grid) {
    let prefixA = Array.from(
        {length:grid.length},
        ()=>new Array(grid[0].length).fill(0)
    );

    let prefixZ = Array.from(
        {length:grid.length},
        ()=>new Array(grid[0].length).fill(0)
    );

    for(let R = 0; R<grid.length; R++){
        for(let C = 0; C<grid[0].length; C++){
            prefixA[R][C] += grid[R][C];
            prefixZ[R][C] += grid[R][C];
            if(R>0 && C>0){
                prefixA[R][C] += prefixA[R-1][C-1]
            }
            if(R>0 && C<grid[0].length-1){
                prefixZ[R][C] += prefixZ[R-1][C+1]
            }
        }
    }

    let mySet = new Set();
    for(let R = 0; R<grid.length; R++){
        for(let C = 0; C<grid[0].length; C++){
            mySet.add( grid[R][C]);
            for(let K = 1; ;K++){
                if(R-K < 0 || C-K < 0){break;}
                if( 
                    R+K >= grid.length || C+K >= grid[0].length
                ){break;}
                let sum = 0;

                //Top LR
                sum += prefixZ[R][C-K] - (prefixZ[R-K-1]?.[C+1] || 0);
                sum += prefixA[R][C+K] - (prefixA[R-K-1]?.[C-1] || 0);

                //Bottom LR
                sum += prefixA[R+K][C] - (prefixA[R-1]?.[C-K-1] || 0);
                sum += prefixZ[R+K][C] - (prefixZ[R-1]?.[C+K+1] || 0);

                sum -= grid[R-K][C];
                sum -= grid[R][C+K];
                sum -= grid[R+K][C];
                sum -= grid[R][C-K]; 

                mySet.add(sum);
            }
        }
    }

    return [...mySet].sort((a,b)=>b-a).slice(0,3);
};
