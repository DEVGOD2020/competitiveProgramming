/**
 * @param {number[]} coins
 * @param {number} k
 * @return {number}
 */


//nth position of a set, that contains numbers divisable by any coin from coins array

//[2,5]
//2,4,5,6,8,10,12
var findKthSmallest = function (coins, k) {
    function lcm(x, y) {
        return (x * y) / gcd(x, y);
    }

    function gcd(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    function countSet(x){
        let sum = 0;
        let sign = 1;
        for(let coin of coins){
            sum += sign*Math.floor(x/coin);
        }

        return sum;
    }

    console.log( countSet(k) );

};