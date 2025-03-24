/**
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function(n, roads) {
    let graph = {};
    if(n==1){return 1;}
    for(let [start,end,time] of roads){
        if(graph[start] === undefined){
            graph[start] = [];
        }
        if(graph[end] === undefined){
            graph[end] = [];
        }
        graph[start].push([end,time]);
        graph[end].push([start,time]);
    }

    let shortestTime = new Array(n).fill(Infinity);
    shortestTime[0] = 0;
    let pathCount = new Array(n).fill(0);
    pathCount[0] = 1;

    let PQ = new MinPriorityQueue( (X)=>X[1]);
    PQ.enqueue([0,0]);

    while(!PQ.isEmpty()){
        const [node,time] = PQ.dequeue();
        
        for(let child of graph[node]){
            let newTime = time+child[1];

            if(newTime < shortestTime[child[0]]){
                shortestTime[child[0]] = newTime;
                pathCount[child[0]] = pathCount[node];
                PQ.enqueue([child[0], shortestTime[child[0]]])
            }else if( newTime === shortestTime[child[0]] ){
                pathCount[child[0]] = (pathCount[child[0]] + pathCount[node])%(1e9+7);
            }
        }
    }

    return pathCount[n-1];
};