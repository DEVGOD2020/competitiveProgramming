/**
 * @param {number[][]} isConnected
 * @return {number}
 */

var city = new Set();

var findCircleNum = function(isConnected) {
    let hash = {}
    city = new Set();
    const size = isConnected.length;
    for(let I = 0; I<size; I++){
        if(!city.has(''+I)){
            hash[DepthFirstSeach(isConnected, I)] = true;
        }
    }

    return Object.keys(hash).length;
};

function DepthFirstSeach(mat,n){
    let stack = [n];
    let visited = {};
    let nodes = [];
    while(stack.length > 0){
        let val = stack.pop();
        for(let A in mat[val]){
            if(mat[val][A] == 1 && visited[A] !== true){
                stack.push(A);
                visited[A] = true;
                nodes.push(A);
                city.add(A);
            }
        }
    }

    return nodes;
}