/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    const pairs = nums.map((el,I) => [el,I]);
    let ds = function(val){
        let score = 0;
        while(val>0){
            score += val%10;
            val = Math.floor(val/10);
        }
        return score;
    }
    pairs.sort( (a,b)=> { 
        let Z = ds(a[0])-ds(b[0]);
        if(Z == 0){
            return a[0]-b[0];
        }
        return Z;
    } );
    let visit = new Array(nums.length).fill(false);
    let score = 0;
    for(let I = 0; I<nums.length; I++){
        if(pairs[I][1] == I || visit[I] == true){
            continue;
        }
        let Z = I;
        let res = 0;
        while(!visit[Z]){
            res++;
            visit[Z] = true;
            Z = pairs[Z][1];
        }
        if(res > 0){score += res-1;}
    }
    return score;
};