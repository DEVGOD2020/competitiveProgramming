/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function(n, queries) {
    let search = function(){
        let queue = [0];
        let dist = new Array(n).fill(Infinity);
        dist[0] = 0;
        let visited = new Set();
        visited.add(0);
        while(queue.length){
            let node = queue.shift();
            if(node === n-1){
                return dist[node];
            }
            for(let child of graph[node]){
                if(!visited.has(child)){
                    dist[child] = dist[node]+1;
                    queue.push(child);
                    visited.add(child);
                }
            }
        }
        return -1;
    }

    let graph = {};
    for(let I = 1; I<n; I++){
        graph[I-1] = [I];
    }
    graph[n] = [];

    let ans = [];
    for(let q of queries){
        graph[q[0]].push(q[1]);
        ans.push( search() );
    }

    return ans;
};