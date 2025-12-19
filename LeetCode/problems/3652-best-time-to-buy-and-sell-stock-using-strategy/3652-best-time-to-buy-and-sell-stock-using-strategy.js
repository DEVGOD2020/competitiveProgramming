/**
 * @param {number[]} prices
 * @param {number[]} strategy
 * @param {number} k
 * @return {number}
 */
var maxProfit = function(prices, strategy, k) {
    let state = prices.reduce( (sum,el,I)=> sum+el*strategy[I],0 );
    let ans = state;

    //First
    for(let I = 0; I<k; I++){
        state += prices[I] * ( (I+1)>(k/2) ? 1 : 0 );
        state -= prices[I] * strategy[I];
    }

    ans = Math.max(ans,state);

    let L = 0;
    let R = k;
    while(R<prices.length){
        state += prices[L] * strategy[L];

        state -= prices[L + k/2] * 1;
        
        state -= prices[R] * strategy[R];
        state += prices[R] * 1;
        ans = Math.max(ans, state);
        L++;
        R++;
    }

    return ans;
}
