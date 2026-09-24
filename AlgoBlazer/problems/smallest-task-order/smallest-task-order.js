function findTaskOrder(n, requirements) {
    let indegree = new Array(n).fill(0);
    let adj = {};
    for(let [after, before] of requirements){
        if(adj[before] == undefined){
            adj[before] = [];
        }
        indegree[after]++;
        adj[before].push(after);
    }

    let minPQ = new MinPriorityQueue();
    for(let I = 0; I<n; I++){
        if(indegree[I] == 0){
            minPQ.push(I);
        }
    }

    let ans = [];
    while(minPQ.size() > 0){
        let curr = minPQ.pop();
        ans.push(curr);
        for(let next of (adj[curr]??[])){
            indegree[next]--;
            if(indegree[next] == 0){
                minPQ.push(next);
            }
        }
    }

    if(ans.length !== n){
        return [];
    }
    return ans;
}
