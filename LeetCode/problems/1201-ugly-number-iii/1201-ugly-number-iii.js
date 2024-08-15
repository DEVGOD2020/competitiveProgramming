/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
function nthUglyNumber(n, a, b, c) {
    //∣A∪B∪C∣=∣A∣+∣B∣+∣C∣−∣A∩B∣−∣A∩C∣−∣B∩C∣+∣A∩B∩C∣
    //∣A∣+∣B∣+∣C∣ = all individual numbers from set
    //∣A∩B∣−∣A∩C∣−∣B∩C∣ = All pairs of two
    //∣A∩B∩C∣ = Pair of Three

    //A=1, B=2, C=3
    //MID = 10

    //10 + 5 + 3
    //18

    // - (5 - 1 - 3)
    // -1

    //1

    //return 18
    
    function countUglyNumbers(x) {
        return Math.floor(x / a) + Math.floor(x / b) + Math.floor(x / c) -
               Math.floor(x / lcm(a, b)) - Math.floor(x / lcm(b, c)) - Math.floor(x / lcm(a, c)) +
               Math.floor(x / lcm(a, lcm(b, c)));
    }

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

    //Upper bound can be calculated based on the given values of a, b, c
    let left = 1;
    let right = Math.min(a, b, c) * n;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (countUglyNumbers(mid) < n) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}

// Example usage
console.log(nthUglyNumber(10, 2, 3, 5));