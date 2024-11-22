/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if(num%2 == 1){
        return false;
    }
    let sum = 0;
    for(let I = 1; I<=Math.floor(num/2); I++){
        if(num%I === 0){
            sum += I;
        }
    }
    return sum===num;
};