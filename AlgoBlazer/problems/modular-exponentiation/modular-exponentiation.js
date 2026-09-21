const MOD = (1e9)+7;
function mulMod(A,B) {
    const BASE = 2**15;
    let H = Math.floor(B/BASE);
    let L = B%BASE;
    return (((A*H%MOD)*BASE) + A*L)%MOD;
}

function modPow(queries) {
    let ans = [];
    for(let [A,B] of queries){
        let score = 1;
        while(B>0){
            if(B&1){
                score = mulMod(score,A)%MOD;
            }
            A = mulMod(A,A)%MOD;
            B >>=1;
        }
        ans.push(score);
    }
    return ans;
}
