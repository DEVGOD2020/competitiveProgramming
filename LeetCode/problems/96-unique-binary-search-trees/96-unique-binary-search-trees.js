/**
 * @param {number} n
 * @return {number}
 */

var memo = [1,1,2,5,14,42]
var numTreesOld = function(n) {
    if(memo[n] !== undefined){
        return memo[n];
    }
  
    let result = 0;
    for (let i = 0; i < n; i++) {
    result += numTrees(i) * numTrees(n - i - 1);
    }

    memo[n] = result;
    return memo[n];
};

//Very fast
var numTreesOld = function(n) {
    
}