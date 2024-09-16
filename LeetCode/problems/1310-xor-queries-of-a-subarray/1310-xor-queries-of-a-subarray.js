/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function(arr, queries) {
    let prefix = [arr[0]];
    let ans = [];
    for(let I = 1; I<arr.length; I++){
        prefix.push(prefix[prefix.length-1]^arr[I]);
    }
    
    for(let q of queries){
        let score = prefix[q[0]] ^ prefix[q[1]] ^ arr[q[0]];
        ans.push(score);
    }

    return ans;
};