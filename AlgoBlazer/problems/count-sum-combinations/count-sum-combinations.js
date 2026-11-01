function countSumCombinations(values, target) {
    const MOD = 1e9+7;
    let DP = new Array(target+1).fill(0);
    DP[0]=1;
    for(let val of values){
        for(let I = 1; I<=target; I++){
            if(I-val >= 0){
                DP[I] = (DP[I]+DP[I-val])%MOD;
            }
        }
    }
    return DP[target];
}