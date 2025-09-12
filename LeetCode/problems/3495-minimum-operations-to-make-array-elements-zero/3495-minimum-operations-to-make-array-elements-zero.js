/**
 * @param {number[][]} queries
 * @return {number}
 */

var minOperations = function(queries) {
    let score = 0;
    for(let [min,max] of queries){
        //3*4**x bucket defaults, x=[0...14]
        let dp = [
            0,3,12,48,192,768,3072,12288,
            49152,196608,786432,3145728,
            12582912,50331648,
            201326592, 805306368
        ];
        for(let I = 1; min>0; I++){
            if( min-1 >= dp[I]){
                min = min-dp[I];
                dp[I] = 0;
            }
            else if(min-1<dp[I]){
                dp[I] = dp[I]-(min-1);
                min = 0;
            }
        }
        const rightBit = Math.ceil(Math.floor(Math.log2(max)+1)/2);
        const next = 4**rightBit-1;
        let right = next-max;
        for(let I = rightBit; right>0; I--){
            if(right>=dp[I]){
                right = right-dp[I];
                dp[I] = 0;
            }
            else if(right<dp[I]){
                dp[I] = dp[I]-(right);
                right = 0;
            }
        }

        score += Math.ceil(
            dp.slice(0,rightBit+1).reduce( 
                (sum,el,I)=>I*el+sum,0
            )/2
        );
    }
    return score;
};
