/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countSymmetricIntegers = function(low, high) {
    let score = 0;
    let mySet = new Set([11,22,33,44,55,66,77,88,99]);
    for(let I = low; I<=high; I++){
        if(I >= 100 && I <= 999 || I == 10000){continue}
        let firstDigs = (Math.floor(I/1000)%10) + (Math.floor(I/100)%10);
        let secondDigs = (Math.floor(I/10)%10) + (Math.floor(I)%10);
        score += +(firstDigs == secondDigs || mySet.has(I) );
    }

    return score;
};