/**
 * @param {number[]} edges
 * @param {number} node1
 * @param {number} node2
 * @return {number}
 */
var closestMeetingNode = function(edges, node1, node2) {
    
    let dfs = function(root,memo,I){
        let stack = [ [root,0] ];
        let visit = new Set();
        while(stack.length){
            let [node,dis] = stack.pop();
            if(node === -1){continue;}
            if(visit.has(node)){continue;}
            memo[node][I] = Math.min(memo[node][I],dis);
            
            stack.push([edges[node],dis+1]);
            
            visit.add(node);
        }
        return 0;
    }

    let memo = Array.from(
        {length:edges.length}, 
        ()=> [Infinity,Infinity] 
    );

    dfs(node1, memo, 0);
    dfs(node2, memo, 1);

    let min = Infinity;
    let ans = -1;
    for(let I = 0; I<memo.length; I++){
        if(Math.max(...memo[I]) === Infinity){
            continue;
        }
        if(min > Math.max(...memo[I])){
            min = Math.max(...memo[I]);
            ans = I;
        }
    }

    return ans;
};
