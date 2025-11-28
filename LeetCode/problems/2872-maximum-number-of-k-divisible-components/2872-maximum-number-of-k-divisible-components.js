/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function(n, edges, values, k) {
    if(n == 1){return 1;}

    let graph = {};
    for(let [X,Y] of edges){
        if(graph[X] === undefined){graph[X] = [];}
        if(graph[Y] === undefined){graph[Y] = [];}
        graph[X].push(Y);
        graph[Y].push(X);
    }

    let score = 0;
    let visit = new Set();
    let dfs = function(I=0){
        let sum = values[I]%k;
        visit.add(I);

        for(let node of graph[I]){
            sum += !visit.has(node) ? dfs(node) : 0;
        }
        sum %= k;

        if(sum == 0){
            score++;
        }
        return sum;
    }

    dfs(0);
    return score;
};
