function isTwoColorable(graph) {
    let visit = new Uint8Array(graph.length).fill(0);
    for(let I = 0; I<graph.length; I++){
        if(visit[I] !== 0){continue;}
        let stack = [ I ];
        visit[I] = 1;
        while(stack.length){
            let curr = stack.pop();
            for(let child of graph[curr]){
                if(visit[child] == visit[curr]){return false;}
                if(visit[child] == 0){
                    visit[child] = visit[curr]==1?2:1;
                    stack.push( child );
                }

            }
        }
    }
    return true;
}