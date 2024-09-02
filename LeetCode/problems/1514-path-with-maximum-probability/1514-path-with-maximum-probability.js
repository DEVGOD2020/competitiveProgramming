/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} succProb
 * @param {number} start_node
 * @param {number} end_node
 * @return {number}
 */
var maxProbability = function(n, edges, succProb, start_node, end_node) {
    let graph = {};
    let dists = new Array(n).fill(Number.MIN_SAFE_INTEGER)
    for(let I = 0; I<n; I++){
        graph[I] = [];
    }

    for(let I = 0; I<edges.length; I++){
        graph[edges[I][0]].push([edges[I][1],succProb[I]]);
        graph[edges[I][1]].push([edges[I][0],succProb[I]]); 
    }

    const PQ = new MaxPriorityQueue({ priority: x => x[1] });
    PQ.enqueue([start_node,1]);

    while(!PQ.isEmpty()){
        const [node, prob] = PQ.dequeue().element;

        if(node === end_node){ return prob;}
        if(dists[node] > prob){ continue; }

        for(const [I, weight] of graph[node]){
            if(prob * weight > dists[I]){
                dists[I] = prob*weight;
                PQ.enqueue([I, dists[I]]);
            }
        }
    }

    return 0;
};