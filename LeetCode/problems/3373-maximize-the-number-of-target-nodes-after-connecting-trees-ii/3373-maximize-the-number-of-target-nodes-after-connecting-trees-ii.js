/**
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number[]}
 */
var maxTargetNodes = function(edges1, edges2) {
    let graph1 = {};
    let graph2 = {};
    let limit1 = 0;
    let limit2 = 0;
    for(let [X,Y] of edges1){
        if(!graph1[X]){graph1[X] = [];}
        if(!graph1[Y]){graph1[Y] = [];}
        graph1[X].push(Y); graph1[Y].push(X);
        limit1 = Math.max(limit1,X,Y);
    }
    for(let [X,Y] of edges2){
        if(!graph2[X]){graph2[X] = [];}
        if(!graph2[Y]){graph2[Y] = [];}
        graph2[X].push(Y); graph2[Y].push(X);
        limit2 = Math.max(limit2,X,Y);
    }

    let dfs = function(graph, root, startSign){
        let stack = [[root, startSign]];
        let visit = new Set();
        let arr = new Array();
        let odd = 0;
        let even = 0;
        while(stack.length){
            let [nodeVal,sign] = stack.pop();
            if(visit.has(nodeVal)){continue;}
            arr[nodeVal] = sign;
            if(sign){even++}else{odd++}
            for(let child of graph[nodeVal]){
                stack.push([child,!sign])
            }
            visit.add(nodeVal);
        }
        return arr.map( (el)=>el?even:odd);
    }

    firstArr = dfs(graph1,0,true);
    secondArr = dfs(graph2,0,false);
    let secondMax = Math.max(...secondArr);
    return firstArr.map( (el)=> el+secondMax );
};
