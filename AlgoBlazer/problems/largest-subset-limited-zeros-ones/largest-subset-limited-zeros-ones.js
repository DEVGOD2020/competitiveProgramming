function largestSubsetSize(strs, maxZeros, maxOnes) {
    let DP = Array.from({length: 101}, ()=>new Array(101).fill(0) );
    for(let I = 0; I<strs.length; I++){
        let zeroCount = strs[I].split("0").length-1;
        let oneCount = strs[I].split("1").length-1;
        for(let ONE = maxOnes; ONE>=oneCount; ONE--){
            for(let ZERO = maxZeros; ZERO>=zeroCount; ZERO--){
                DP[ONE][ZERO] = Math.max(
                    DP[ONE][ZERO], 
                    1 + DP[ONE-oneCount][ZERO-zeroCount] 
                );
            }
        }
    }
    return DP[maxOnes][maxZeros];
}