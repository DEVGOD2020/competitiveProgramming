function isTwoColorable(graph) {
    let visit = new Uint8Array(graph.length).fill(0);
    let stack = [ [0,1] ];
    while(stack.length){
        let curr = stack.pop();
        if(visit[curr[0]] == 0){
            visit[curr[0]] = curr[1];
            for(let child of graph[curr[0]]){
                stack.push( [child, curr[1]==1?2:1] );
            }
        }else if(visit[curr[0]] == (curr[1]==1?2:1) ){
            return false
        }
    }
    return true;
}
