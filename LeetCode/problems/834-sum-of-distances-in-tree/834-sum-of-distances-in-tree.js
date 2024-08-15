/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function(n, edges) {
    const graph = new Array(n).fill(null).map(() => []);
    let count = new Array(n).fill(1);
    let res = new Array(n).fill(0);
    
    //Graph creation from edges
    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    //amount of paths each subtree of node has -> res
    let dfs = function(node, parent){
        for(let child of graph[node]){
            if(child !== parent){
                dfs(child, node);
                count[node] += count[child];
                res[node] += res[child]+count[child];
            }
        }
    }

    //Honestly Idk what the fuck gonna on here, but it somehow gets us the rest of the way, accountign for parent and other subtree values
    const dfs2 = (cur, parent) => {
        for (const child of graph[cur]) {
            if (child !== parent) {
                res[child] = res[cur] + n - 2 * count[child];
                dfs2(child, cur);
            }
        }
    };

    
    dfs(0,-1);
    dfs2(0,-1);
    return res;
};