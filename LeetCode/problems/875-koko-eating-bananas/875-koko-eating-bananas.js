/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

//Array max
Array.prototype.max = function() {
  return Math.max.apply(null, this);
};

var minEatingSpeed = function(piles, h) {
    let L = 1;
    let R = piles.max();
    let M;
    let res = R;
    while(L<=R){
        M = Math.floor( (L+R)/2 );
        let val = findHours(piles,M);

        if(val <= h){
            res = Math.min(res, M);
            R = M-1;
        }else{
            L = M+1;
        }
    }
    return res;
};

//Amount
var findHours = function(piles, Z){
    let amount = 0;
    for(let a of piles){
        amount += Math.ceil(a/Z);
    }
    return amount;
}