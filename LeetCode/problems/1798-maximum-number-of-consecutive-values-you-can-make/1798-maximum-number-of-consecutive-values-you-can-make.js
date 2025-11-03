/**
 * @param {number[]} coins
 * @return {number}
 */
var getMaximumConsecutive = function(coins) {
    let ans = 1;
    coins.sort( (a,b)=>a-b );
    for(let C of coins){
        if(C > ans){ break; }
        ans += C;
    }
    return ans;
};
