/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let sign = 1;
    if (x < 0) {
        sign = -1; x *= -1;
    }
    let myNum = 0;
    while (x > 0) {
        const digit = x % 10;
        if (x > 0) { x = Math.floor(x / 10); }
        myNum = myNum * 10 + digit;
    }
    if (myNum > Math.pow(2, 31)) { return 0; }
    return sign * myNum;
};