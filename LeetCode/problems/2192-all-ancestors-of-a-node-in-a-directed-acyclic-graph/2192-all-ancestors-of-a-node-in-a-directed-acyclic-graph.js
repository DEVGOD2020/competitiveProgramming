/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[][]}
 */

//stevenarellano
var getAncestors = function(n, edges) {
    const inDegrees = new Array(n).fill(0);

    const res = {};
    for(let I = 0;  I < n; I++){
        res[I] = new Set();
    }

    const graph = {}
    for (const [from, to] of edges) {
        inDegrees[to]++;

        if (!graph[from]) {
            graph[from] = [];
        }
        graph[from].push(to);
    }

    const q = [];
    for (let i = 0; i < n; i++) {
        if (inDegrees[i] === 0) {
            q.push(i);
        }
    }

    //Dont panik, this BFS
    while (q.length) {
        const node = q.shift();
        const neighbors = graph[node] || [];

        for (const neighbor of neighbors) {
            // add this node to its child's ancestor set
            res[neighbor].add(node);
            // add each of this node's ancestors to its child's ancestor set
            for (const v of res[node]) {
                res[neighbor].add(v)
            }
            
            // decrease the in-degree for this node's child + check if should be added to top sort
            inDegrees[neighbor]--
            if (inDegrees[neighbor] === 0) {
                q.push(neighbor);
            }
        }
    }

    const result = [];
    for (const set of Object.values(res)) {
        const arr = Array.from(set);
        arr.sort((a,b) => a-b);
        result.push(arr)
    }
    return result
};