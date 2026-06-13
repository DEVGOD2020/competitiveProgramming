/**
 * @param {number[][]} edges
 * @return {number}
 */
var assignEdgeWeights = function(edges) {
    const MOD = 1000000007n;
    let graph = {};
    for(let [u,v] of edges){
        graph[u] ??= [];
        graph[v] ??= [];

        graph[u].push(v);
        graph[v].push(u);
    }

    let visit = new Set();
    let dfs = function(curr=1,depth=0){
        let maxDepth = depth;
        visit.add(curr);
        if(graph[curr]){
            for(let child of graph[curr]){
                if(visit.has(child)){continue;}
                maxDepth = Math.max(dfs(child,depth+1),maxDepth);
            }
        }
        return maxDepth;
    }

    let maxDepth = dfs();
    let pow = function(a,b){
        let res = 1n;
        a = BigInt(a);
        while(b>0){
            if( (b%2)==1){res = (res*a)%MOD}
            a = (a*a)%MOD;
            b = Math.floor(b/2);
        }
        return Number(res);
    }

    return pow(2,maxDepth-1);
};