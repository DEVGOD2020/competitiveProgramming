/**
 * @param {number[][]} grid
 * @param {number[]} queries
 * @return {number[]}
 */

var maxPoints = function(grid, queries) {
    let prefixSum = 0;

    let queryPQ = new MinPriorityQueue((el)=>el[0]);
    for(let I = 0; I<queries.length; I++){
        queryPQ.enqueue([queries[I],I]);
    }

    let minPQ = new MinPriorityQueue((el)=>el[2]);
    minPQ.enqueue([0,0,grid[0][0]]);
    let visit = new Set();
    let bfs = function(target){
        while(!minPQ.isEmpty() && minPQ.front()[2] < target){
            let [row,col,val] = minPQ.dequeue();
            if(visit.has(row*grid[0].length+col) ){continue;}
            visit.add( row*grid[0].length+col );
            prefixSum++;

            if(row-1 >= 0 && !visit.has( (row-1)*grid[0].length+col )){
                minPQ.enqueue([ row-1,col,grid[row-1][col] ])
            }
            if(col-1 >= 0 && !visit.has( row*grid[0].length+(col-1) )){
                minPQ.enqueue([ row,col-1,grid[row][col-1] ])
            }
            if(row+1 < grid.length && !visit.has( (row+1)*grid[0].length+col )){
                minPQ.enqueue([ row+1,col,grid[row+1][col] ])
            }
            if(col+1 < grid[0].length && !visit.has( row*grid[0].length+(col+1) )){
                minPQ.enqueue([ row,col+1,grid[row][col+1] ])
            }
        }
        return prefixSum;
    }

    let ans = [];
    while(!queryPQ.isEmpty()){
        let [q,id]= queryPQ.dequeue();
        ans[id] = bfs(q);
    }

    return ans;
};