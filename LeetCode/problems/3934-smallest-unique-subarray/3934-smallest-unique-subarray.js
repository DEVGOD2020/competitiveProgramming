/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestUniqueSubarray = function(nums) {
    const MOD = (1e9)-7;
    let BASE = 257;

    let POW = new Array(nums.length);
    POW[0] = 1;

    for(let I = 1; I<nums.length; I++){
        POW[I] = (POW[I-1]*BASE)%MOD;
    }

    let L = 1;
    let R = nums.length;
    while(L<R){
        let M = Math.floor((L+R)/2);
        let HIGH = POW[M-1];

        let mySet = new Set();
        let cands = new Set();

        let HASH = 0;
        for(let I = 0; I<M; I++){
            HASH = ( (HASH*BASE)+(nums[I]) )%MOD;
        }

        mySet.add(HASH);
        cands.add(HASH);
        for(let I = M; I<nums.length; I++){
            HASH = ( (HASH)-(HIGH*nums[I-M]) )%MOD;
            if(HASH < 0) HASH += MOD;
            HASH = ( (HASH*BASE)+(nums[I]))%MOD;

            if(mySet.has(HASH)){
                cands.delete(HASH);
            }else{
                mySet.add(HASH);
                cands.add(HASH);
            }
        }
        if(cands.size > 0){R = M;}
        else{L=M+1;}
    }
    return L;
};