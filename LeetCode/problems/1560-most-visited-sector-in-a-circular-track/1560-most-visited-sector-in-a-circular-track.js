/**
 * @param {number} n
 * @param {number[]} rounds
 * @return {number[]}
 */
var mostVisited = function(n, rounds) {
    let ans = [];
    let I = rounds[0]-1;
    while(I!=rounds[rounds.length-1]-1){
        ans.push(I+1);
        I = ((I+1)%n);
    }
    ans.push(rounds[rounds.length-1]);
    return ans.sort((a,b)=>a-b);
};
