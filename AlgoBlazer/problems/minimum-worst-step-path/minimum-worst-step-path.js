function minimumWorstStepPath(grid) {
    let dist = Array.from({length:grid.length},()=>new Array(grid[0].length).fill(Infinity));
    dist[0][0] = 0;

    let minPQ = new MinPriorityQueue( (el)=>el[2]);
    minPQ.push([0,0,0]);

    let DIRS = [[0,1],[0,-1],[1,0],[-1,0]];
    while(!minPQ.isEmpty()){
        let [A,B, cost] = minPQ.pop();
        if(A == grid.length-1 && B == grid[0].length-1){
            return cost;
        }
        if(cost > dist[A][B]){continue;}
        for(let [Q,W] of DIRS){
            let row = A+Q;
            let col = B+W;
            if(row<0 || col<0 || row>=grid.length || col>=grid[0].length){
                continue;
            }
            let newCost = Math.max(cost,Math.abs(grid[A][B]-grid[row][col]));
            if(newCost < dist[row][col]){
                dist[row][col] = newCost;
                minPQ.push([row,col,newCost]);
            }
        }
    }
}
