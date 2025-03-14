/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function(candies, k) {
    let blah = function(I){
        return k <= candies.reduce( (sum,el)=>sum + Math.floor(el/I), 0);
    }

    let L = 0;
    let R = Math.max(...candies);
    let M = Math.floor( (L+R)/2 );
    while(L<=R){
        M = Math.floor( (L+R)/2 );
        if(blah(M) ){
            L = M+1;
        }else{
            R = M-1;
        }
    }

    return R;
};