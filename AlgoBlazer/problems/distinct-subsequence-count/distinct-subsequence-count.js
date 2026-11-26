function countSubsequences(text, target) {
    let DP = new Array(text.length).fill(0);
    
    let PREV = [];
    for(let I = 0; I<target.length; I++){
        DP[I-1] = 0;
        for(let Z = I; Z<text.length; Z++){
            if(text[Z] == target[I]){
                DP[Z] = (DP[Z-1]??0) + (PREV[Z-1]??1);
            }else{
                DP[Z] = (DP[Z-1]??0);
            }
            PREV[Z-1] = DP[Z-1]
        }
    }

    return DP[text.length-1];
}