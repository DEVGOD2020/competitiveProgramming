/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    let memo = new Map();
    let helper = function(amount){
        if(amount < 0){return Infinity;}
        if(amount == 0){return 0;}

        if(memo.has(amount)){
            return memo.get(amount);
        }else{
            let score = Infinity;
            for(let coin of coins){
                score = Math.min(score, helper(amount - coin)+1);
            }
            memo.set(amount,score);
            return memo.get(amount);
        }
    }

    let ans = helper(amount);
    return ans==Infinity ? -1 : ans;
};