/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    for(let I = num.length-1; I>=0 && k > 0; I--){
        num[I] += k;
        k = Math.floor(num[I]/10);
        num[I] %= 10;
    }
    while(k>0){
        num.unshift(k%10);
        k = Math.floor(k/10);
    }

    return num;
};
