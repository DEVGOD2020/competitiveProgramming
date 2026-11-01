function minReachableEdgeWeight(n, edges) {
    let parent = [];
    let min = new Array(n+1).fill(Infinity);
    for(let I = 0; I<=n; I++){ parent[I] = I; }

    let find = function(a){
        if(parent[a] != a){
            parent[a] = find(parent[a]);
        }
        return parent[a];
    }

    let union = function(a,b,c){
        let rootA = find(a);
        let rootB = find(b);
        if(rootA != rootB){
            parent[rootB] = rootA;
        }
        min[rootA] = Math.min(min[rootA], min[rootB], c);
    }

    for(let [A,B,C] of edges){
        union(A,B,C);
    }

    return min[find(n)];
}