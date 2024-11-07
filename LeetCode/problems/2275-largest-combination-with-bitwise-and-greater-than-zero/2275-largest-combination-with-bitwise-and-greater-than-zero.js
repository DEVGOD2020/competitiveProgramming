/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
    let myMap = new Map();
    let ans = 0;
    let nya = function(val){
        let mask = 2**30;
        while(mask > 0){
            if( (val&mask) > 0){
                myMap.set(mask, (myMap.get(mask)||0)+1 );
                ans = Math.max(ans, myMap.get(mask));
            }
            mask = mask >> 1;
        }
    }

    for(let cand of candidates){
        nya(cand);
    }

    return ans;
};