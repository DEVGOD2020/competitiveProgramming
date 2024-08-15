/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let mySet = new Set();
    for(let chr of s){
        if(!isNaN(chr)){
            if(!mySet.has(chr)){
                mySet.add(chr);
            }
        }
    }

    let max1 = -Infinity;
    let max2 = -Infinity;

    for(let val of [...mySet]){
        if(val > max1){
            max2 = max1;
            max1 = val;
        }else if(val > max2){
            max2 = val;
        }
    }

    if(max2 < 0 || max1 == max2){
        return -1;
    }

    return max2;
};