function criticalPathDuration(n, dependencies, duration) {
    let graph = {};
    let inDegree = new Array(n+1).fill(0);
    for(let [A,B] of dependencies){
        if(graph[A] == undefined){ graph[A] = []; }
        graph[A].push(B);
        inDegree[B]++;
    }

    let Q = new MinPriorityQueue( (el)=>el[0]);
    for(let I = 1; I<=n; I++){
        if(inDegree[I] == 0){
            Q.push( [duration[I-1],I] );
        }
    }

    let score = 0;
    while(!Q.isEmpty()){
        let [time,curr] = Q.pop();
        for(let child of graph[curr]||[]){
            if(inDegree[child]-- == 1){
                Q.push([duration[child-1]+time,child])
            }
        }
        score = time;
    }
    return score;
}