/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    let outdegree = Array(graph.length).fill(0)
    let ans = [];

    let revGraph = {};
    let q = [];
    for (let i = 0; i < graph.length; i++) {
        for(let node of graph[i]){
            if( revGraph[node] === undefined){
                revGraph[node] = [];
            }
            revGraph[node].push(i);
            outdegree[i]++;
        }
        if (outdegree[i] === 0) {
            q.push(i);
        }
    }

    while(q.length > 0){
        const node = q.shift();
        ans.push(node);
        for(let child of revGraph[node] || []){
            outdegree[child]--;
            if(outdegree[child] === 0){
                q.push(child);
            }
        }
    }

    return _.sortBy(ans);
};