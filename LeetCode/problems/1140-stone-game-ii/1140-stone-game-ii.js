/**
 * @param {number[]} piles
 * @return {number}
 */
var stoneGameII = function(piles) {
    let sum = new Array(piles.length).fill(0);
    sum[0] = piles[0];
    for(let I = 1; I<piles.length; I++){
        sum[I] = sum[I-1]+piles[I];
    }

    let memo = new Map();
    let dp = function(I,M=1){
        if(I>=piles.length){return 0;}
        if(memo.has(`${I},${M}`)){
            return memo.get(`${I},${M}`);
        }
        let ans = -Infinity;
        for(let X = 1; X<=2*M; X++){
            if(I+X-1>=piles.length){break;}
            let gain = sum[I+X-1]-(sum[I-1]??0);
            ans = Math.max(
                ans,
                gain-dp(I+X, Math.max(M,X))
            )
        }
        memo.set(`${I},${M}`,ans);
        return ans;
    }

    let diff = dp(0);
    let total = piles.reduce((sum,el)=>sum+el);
    return (total+diff)/2;
};