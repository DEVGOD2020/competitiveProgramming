/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let max = 0;
    let first = 0;
    let last = 0;
    let I = 1;
    while(n > 0){
        if(n&1 == 1){
            last = first;
            first = I;
            if(last > 0){
                max = Math.max(max, first-last);
            }
        }
        n = n >> 1;
        I++;
    }

    return max;
};