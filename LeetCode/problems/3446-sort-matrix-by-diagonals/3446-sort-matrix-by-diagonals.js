/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(grid) {
    const N = grid.length;
    let myMap = new Map();
    for(let row = 0; row<N; row++){
        for(let col = 0; col<N; col++){
            if(!myMap.has(row-col)){
                myMap.set(row-col, 
                    (row-col)<0 ? new MinPriorityQueue() : new MaxPriorityQueue()
                );
            }
            myMap.get(row-col).push(grid[row][col]);
        }
    }

    for(let row = 0; row<N; row++){
        for(let col = 0; col<N; col++){
            grid[row][col] = myMap.get(row-col).dequeue();
        }
    }

    return grid;
};
