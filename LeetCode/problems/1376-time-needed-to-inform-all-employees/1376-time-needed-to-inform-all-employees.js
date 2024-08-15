/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function (n, headID, manager, informTime) {
    let dfs = function(node){
        if(manager[node] != -1){
            informTime[node] += dfs(manager[node]);
            manager[node] = -1;
        }
        return informTime[node];
    }
    
    let max = 0;
    for(let I = 0; I<n; I++){
        max = Math.max(max, dfs(I));
    }
    return max;
};