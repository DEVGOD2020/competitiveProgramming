/**
 * @param {number[]} coins
 * @param {number} target
 * @return {number}
 */
var minimumAddedCoins = function(coins, target) {
    coins.sort( (a,b)=> a-b);
    let score = 0;
    let ans = 0;
    for(let C of coins){
        while(score+1 < C){
            score += score+1;
            ans++;
        }
        score += C;
    }

    while(score < target){
        score += score+1;
        ans++;
    }

    return ans;
};

