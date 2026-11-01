function countSumSequences(values, target) {
    const MOD = 1e9+7;
    let DP = new Uint32Array(target+1);
    DP[0]=1;
    for(let I = 1; I<=target; I++){
        for(let val of values){
            if(I-val >= 0){
                DP[I] = (DP[I]+DP[I-val])%MOD;
            }
        }
    }
    return DP[target];
}