/**
 * @param {number[]} stoneValue
 * @return {string}
 */
var stoneGameIII = function(sV) {
    let MEMO = new Array(sV.length).fill(undefined);
    let DP = function(I){
        if(MEMO[I] !== undefined){
            return MEMO[I];
        }
        if(I>=sV.length){return 0;}
        let max = sV[I]-DP(I+1);
        let gain = sV[I];
        for(let Z = 1; Z<3 && I+Z<sV.length; Z++){
            max = Math.max(
                (gain+=sV[I+Z])-DP(I+Z+1),
                max
            )
        }
        MEMO[I] = max;
        return max;
    }
    let ans = DP(0);
    if(ans>0){return "Alice";}
    if(ans<0){return "Bob";}
    return "Tie";
};