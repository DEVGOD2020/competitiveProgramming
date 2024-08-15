/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if(n==1){return 1;}

    let trusts = {};
    let trustedBy = {};

    for(let [a,b] of trust){
        if(trusts[a] === undefined){trusts[a] = 0;}
        trusts[a]++;

        if(trustedBy[b] === undefined){trustedBy[b] = 0;}
        trustedBy[b]++;
    }

    for(let A of Object.keys(trustedBy)){
        if(trustedBy[A] == n-1 && trusts[A] === undefined){
            return A;
        }
    }

    return -1;
};