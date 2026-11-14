function minCostToCoverDays(days, costs) {
    let DP = new Array( Math.max(...days) ).fill(0);

    for(let I = 0; I<=365; I++){
        if(days.includes(I)){
            DP[I] = Math.min(
                (DP[I-1]??0)+costs[0],
                (DP[I-7]??0)+costs[1],
                (DP[I-30]??0)+costs[2]
            )
        }else{
            DP[I] = DP[I-1];
        }
    }

    return DP[DP.length-1];
}