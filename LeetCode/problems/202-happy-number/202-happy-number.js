/**
 * @param {number} n
 * @return {boolean}
 */

var isHappy = function(n, memo) {
    let str = ""+n;
    let val = 0;

    if(memo === undefined){
        memo = [];
    }

    for(a of str){
        let val2 = parseInt(a);
        val += val2*val2;
    }

    if(val == 1){return true;}
    if(memo.includes(val)){return false;}
    memo.push(val);

    return isHappy(val, memo);
};