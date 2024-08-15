/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    if(n==1){return true;}

    const graph = buildGraph(edges);
    return hasPath(graph, source, destination, new Set());
};

const buildGraph = (edges) => {
    const graph = {};

    for(let edge of edges){
        const [a,b] = edge;
        if(!(a in graph)){graph[a] = [];}
        if(!(b in graph)){graph[b] = [];}

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph;
}

const hasPath = (graph, s, d, visited) => {
    if(s === d){return true;}
    if(visited.has(s)){return false;}

    visited.add(s);

    for(let A of graph[s]){
        if(hasPath(graph,A,d, visited) === true){
            return true;
        }
    }

    return false;
}

