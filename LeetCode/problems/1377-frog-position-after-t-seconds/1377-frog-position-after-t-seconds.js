/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function(n, edges, t, target) {
    let adjMap = {};
    for(let edge of edges){
        if(adjMap[edge[0]] == null){
            adjMap[edge[0]] = [];
        }
        if(adjMap[edge[1]] == null){
            adjMap[edge[1]] = [];
        }
        adjMap[edge[0]].push(edge[1]);
        adjMap[edge[1]].push(edge[0]);
    }

    console.log(adjMap);

    let stack = [ [1, 1] ];
    let visited = new Set();
    while(stack.length > 0){
        let node = stack.pop();
        visited.add(node[0]);

        if(node[0] == target){
            return node[1];
        }

        if(adjMap[node[0]] !== undefined){
            for(let a = 0; a < adjMap[node[0]].length; a++){
                if(!visited.has( adjMap[node[0]][a] )){
                    stack.push( [adjMap[node[0]][a], node[1]/ adjMap[node[0]].length ] );
                }
            }
        }
    }
    

    console.log(adjMap);

    return 0;
};