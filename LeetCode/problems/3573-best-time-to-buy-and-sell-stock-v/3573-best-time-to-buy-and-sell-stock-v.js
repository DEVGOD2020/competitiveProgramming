/**
 * @param {number[]} prices
 * @param {number} k
 * @return {number}
 */
var maximumProfit = function(prices, k) {
    let memo = new Map();
    let blah = function(I, target, type){
        if (I == 0) {
            if (type === 0) return 0;
            if (type === 1) return -prices[I];
            if (type === 1) return prices[I];
            return -Infinity;
        }
        
        const KEY = 10000*I+10*target+type;

        if(target == 0){return 0; }
        if(memo.has(KEY) ){
            return memo.get(KEY);
        }

        const PRICE = prices[I];

        let skip = blah(I-1, target, type);

        if(type == 0){
            let normal = blah(I-1,target,1) + PRICE;
            let short = blah(I-1,target,2) - PRICE;
            memo.set(KEY, Math.max(skip,normal,short));
            return memo.get(KEY);
        }

        let stop = -Infinity;
        if(type == 1){
            stop = blah(I-1, target-1, 0) - PRICE;
        }
        if(type == 2){
            stop = blah(I-1, target-1, 0) + PRICE;
        }

        memo.set(KEY, Math.max(skip, stop));
        return memo.get(KEY);
    }

    return blah(prices.length-1,k,0);
};
