/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
    if(n == 1){
        return [0];
    }

    let adjMat = {};
    let edgeCount = {};
    let leaves = [];

    for (let edge of edges) {
        if (!adjMat[edge[0]]) {
            adjMat[edge[0]] = [];
        }
        if (!adjMat[edge[1]]) {
            adjMat[edge[1]] = [];
        }
        adjMat[edge[0]].push(edge[1]);
        adjMat[edge[1]].push(edge[0]);
    }

    for (let [key, value] of Object.entries(adjMat)) {
        if(value.length == 1){
            leaves.push(key);
        }
        edgeCount[key] = value.length;
    }
    
    while(leaves.length){
        if(n<=2){return leaves}

        const SIZE = leaves.length;
        for(let I = 0; I<SIZE; I++){
            let node = leaves.shift();
            n--;
            for(let el of adjMat[node]){
                edgeCount[el] += -1;
                if(edgeCount[el] == 1){
                    leaves.push(el);
                }
            }
        }
    }

    return leaves;

};