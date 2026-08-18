/**
 * @param {number} n
 * @return {boolean}
 */
var winnerSquareGame = function(n) {
    let memo = new Array(n+1).fill(null);
    let DP = function(I){
        if(memo[I]){return true;}
        else if(memo[I] == false){return false;}
        if(I==0){return false;}
        if(I==1){return true;}
        if(I==2){return false;}
        for(let X = 1; X*X<=n; X++){
            if(I-X*X >= 0){
                if(!DP(I-X*X)){
                    memo[I] = true;
                    return true;
                }
            }
        }
        memo[I] = false;
        return false;
    }
    return DP(n);
};