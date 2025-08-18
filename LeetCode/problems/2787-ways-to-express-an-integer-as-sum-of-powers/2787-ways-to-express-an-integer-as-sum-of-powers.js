var numberOfWays = function(n, x) {
    let powers = [];
    for (let I=1;I**x<=n;I++) {
        powers.push(I**x);
    }

    let dp = Array.from(
        {length:n+1},
        ()=>new Array(powers.length+1).fill(0)
    );

    let blah = function(n,I){
        if(n == 0){return 1;}
        if(n < 0 || powers.length <= I || powers[I] > n){return 0;}
        
        if( dp[n][I] ){
            return dp[n][I];
        }

        let res = blah(n-powers[I],I+1) + blah(n,I+1);

        dp[n][I] = res;
        return dp[n][I];
    }
    return blah(n,0)%(1e9+7);
};
