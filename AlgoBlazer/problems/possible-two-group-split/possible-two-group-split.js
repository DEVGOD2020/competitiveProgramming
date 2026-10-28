function canSplitIntoTwoGroups(n, conflicts) {
    let colors = new Array(n+1).fill(-1);
    let graph = {};
    for(let [A,B] of conflicts){
        if(graph[A] == undefined){
            graph[A] = [];
        }
        if(graph[B] == undefined){
            graph[B] = [];
        }
        graph[A].push(B);
        graph[B].push(A);
    }

    for(let I = 1; I<=n; I++){
        if(colors[I] !== -1){continue;}
        let Q = [I];
        colors[I] = 0;
        while(Q.length > 0){
            let curr = Q.shift();
            for(let child of graph[curr]||[]){
                if(colors[child] == -1){
                    colors[child] = 1-colors[curr];
                    Q.push(child);
                }
                else if(colors[child] == colors[curr]){
                    return false;
                }
            }
        }
    }

    return true;
}