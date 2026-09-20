function countQueenPlacements(n) {
    let ans = 0;
    let search = function(I,D1,D2){
        if(I == (1<<n)-1){
            ans++;
            return 0;
        }
        for(let Z = 1; Z<(1<<n); Z*=2){
            if( ( (I|D1|D2)&Z) == 0){
                search(I|Z,(D1|Z)<<1,(D2|Z)>>1);
            }
        }
        return 0;
    }
    search(0,0,0);
    return ans;
}
