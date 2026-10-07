function fewestValuesToTarget(values, target) {
    let MEMO = new Array(target).fill(0);
    let DP = function(money){
        if(MEMO[money]){return MEMO[money]}
        if(money == 0){return 0;}
        if(money < 0){return Infinity;}
        let ans = Infinity;
        for(let val of values){
            ans = Math.min(ans, DP(money-val)+1);
        }
        MEMO[money] = ans;
        return ans;
    }
    let ans = DP(target);
    return ans==Infinity?-1:ans;
}