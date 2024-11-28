/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function(n, edges) {
    let rank = new Array(n).fill(0);

    for(let edge of edges){
        rank[edge[1]]++;
    }

    let winner = -1;
    for(let I = 0; I<n; I++){
        if(rank[I] === 0 && winner !== -1){
            return -1;
        }
        if(rank[I] === 0 && winner === -1){
            winner = I;
        }
    }

    return winner;
};