/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @param {number} k
 * @return {number[]}
 */
var maxTargetNodes = function(edges1, edges2, k) {
    let graph1 = {};
    let graph2 = {};
    let limit1 = 0;
    let limit2 = 0;
    for(let [X,Y] of edges1){
        if(!graph1[X]){graph1[X] = [];}
        if(!graph1[Y]){graph1[Y] = [];}
        graph1[X].push(Y);
        graph1[Y].push(X);
        limit1 = Math.max(limit1, X, Y);
    }
    for(let [X,Y] of edges2){
        if(!graph2[X]){graph2[X] = [];}
        if(!graph2[Y]){graph2[Y] = [];}
        graph2[X].push(Y);
        graph2[Y].push(X);
        limit2 = Math.max(limit2, X, Y);
    }

    let bfs = function(root,graphZ,target){
        let score = 0;
        let dequeue = new Deque();
        dequeue.pushBack([root,0]);
        let visit = new Set();
        while(dequeue.size()){
            let [node,dis] = dequeue.popBack();
            if(visit.has(node)){
                continue;
            }
            if(dis <= target){score++}else{continue;}
            for(let child of graphZ[node]){
                dequeue.pushFront( [child, dis+1]);
            }
            visit.add(node);
        }
        return score;
    }

    let max2 = 0;
    for(let I = 0; I<=limit2; I++){
        max2 = Math.max( bfs(I,graph2,k-1), max2 );
    }


    let ans = [];
    for(let I = 0; I<=limit1; I++){
        ans[I] = bfs(I,graph1,k) + max2;
    }

    return ans;
};
