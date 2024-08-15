/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let money = 0;
    let I = 0;
    while(I<n){
        let val = ((I%7)+1)+Math.floor(I/7)
        money += val;
        I++;
    }

    return money;
};