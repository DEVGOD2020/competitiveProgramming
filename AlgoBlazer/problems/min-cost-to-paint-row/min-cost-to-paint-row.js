function minPaintCost(costs) {
    let PREV1 = -1;
    let PREV2 = -1;
    for(let FENCE = 0; FENCE<costs.length; FENCE++){
        if(FENCE > 0){
            for(let COLOR = 0; COLOR<costs[0].length; COLOR++){
                if(COLOR !== PREV1){
                    costs[FENCE][COLOR] = costs[FENCE][COLOR]+costs[FENCE-1][PREV1];
                }else{
                    costs[FENCE][COLOR] = costs[FENCE][COLOR]+costs[FENCE-1][PREV2];
                }
            }
        }
        let MIN1 = 0;
        let MIN2 = 1;
        for(let COLOR = 0; COLOR<costs[0].length; COLOR++){
            if( MIN1 == -1 || costs[FENCE][COLOR] < costs[FENCE][MIN1]){
                MIN2 = MIN1;
                MIN1 = COLOR;
            }else if(MIN2 == -1 || costs[FENCE][COLOR] < costs[FENCE][MIN2]){
                MIN2 = COLOR;
            }
        }
        PREV1 = MIN1;
        PREV2 = MIN2;
    }
    return Math.min(costs[costs.length-1][PREV1], costs[costs.length-1][PREV2]);
}
