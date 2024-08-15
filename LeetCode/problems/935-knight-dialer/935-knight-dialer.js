/**
 * @param {number} n
 * @return {number}
 */

const knightMoves = {
    0 : [4,6],
    1 : [6,8],
    2 : [7,9],
    3 : [4,8],
    4 : [0,3,9],
    5 : [],
    6 : [0,1,7],
    7 : [2,6],
    8 : [1,3],
    9 : [2,4]
};

var knightDialer = function(n) {
    let memo = [2,2,2,2,3,0,3,2,2,2]
    let mem2 = [0,0,0,0,0,0,0,0,0,0];
    if(n==1){return 10;}
    if(n==2){return 20;}

    for(let Z = 0; Z<n-2; Z++){
        for(let A = 0; A<10; A++){
            for(let a of knightMoves[A]){
                mem2[A] += memo[a]; 
            }
        }
        memo = mem2;
        mem2 = [0,0,0,0,0,0,0,0,0,0];
    }

    console.log(memo);
    return memo.reduce( (a, b) => a + b)%(10**9+7);
};