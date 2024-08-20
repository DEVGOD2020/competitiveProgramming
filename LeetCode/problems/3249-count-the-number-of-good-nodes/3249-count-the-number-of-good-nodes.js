/**
 * @param {number[][]} edges
 * @return {number}
 */
var countGoodNodes = function(edges) {
    let graph = {};

    let goodNodes = 0;
    let hasSeen = new Set();
    for(let [from,to] of edges){
        if(graph[from] === undefined){
            graph[from] = [];
        }
        if(graph[to] === undefined){
            graph[to] = [];
        }
        graph[from].push(to);
        graph[to].push(from);
    }

    let dfs = function(root){
        if(!graph[root]){goodNodes++; return 1;}
        hasSeen.add(root);
        let score = [];
        for(let child of graph[root]){
            if(hasSeen.has(child)){continue;}
            score.push( dfs(child) );            
        }
        
        if(score.filter( (el)=> el=== score[0]).length == score.length ){
            goodNodes++;
        } 
        return _.sum(score)+1;
    }

    dfs(0);
    return goodNodes;
};