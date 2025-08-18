var productQueries = function(n, queries) {
    const mod = (1e9) + 7;
    let powers = [];
    for(let I = 0; I<32; I++){
        if(n&(1<<I)){
            powers.push( 1<<I );
        }
    }
    let ST = new Array(4 * powers.length);
    function build(node, L, R){
        if (L === R) {
            ST[node] = powers[L]%mod;
        } else {
            const mid = Math.floor((L + R) / 2);
            build(2 * node, L, mid); build(2 * node + 1, mid + 1, R);
            ST[node] = ( (ST[2 * node]) * (ST[2 * node + 1]) );
        }
    }
    function query(l, r, tl=0, tr=powers.length-1, node=1) {
            if (r < tl || tr < l) return 1;
            if (l <= tl && tr <= r) return ST[node];
            const tm = Math.floor((tl + tr) / 2);
            return query(l,r,tl,tm,2*node) * query(l,r,tm+1,tr,2*node+1);
    }
    build(1,0,powers.length-1);
    let ans = [];
    for(let [L,R] of queries){
        ans.push( query(L,R)%mod );
    }
     return ans;
};
