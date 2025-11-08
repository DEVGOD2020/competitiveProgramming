/**
 * @param {number} n
 * @return {number}
 */
var minimumOneBitOperations = function(n) {
    //https://oeis.org/A006068
    let res = 0;
    let temp = n;
    while(temp > 0){
        res ^= temp;
        temp = temp >> 1;
    }
    return res;
};


//1 = 1, 1, 0
//2 = 3, 10, 11, 01, 00
//3 = 2, 11, 01, 00
//4 = 7, 100, 101, 111, 110, 010, 011, 001, 000
//5 = 6, 101, [111, 110, 010, 011, 001, 000]
//6 = 4, 110, [010,011,001,000]
