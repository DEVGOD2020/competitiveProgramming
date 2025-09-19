/**
 * @param {number[]} nums
 * @return {number[]}
 */
var replaceNonCoprimes = function (nums) {
    let gcd = function (a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    let lcm = function (a, b) {
        return (a * b) / gcd(a, b);
    }

    let s = [];
    for (let I = 0; I < nums.length; I++) {
        s.push(nums[I]);
        while (s.length >= 2 && gcd(s[s.length - 1], s[s.length - 2]) > 1) {
            s.push(lcm(s.pop(), s.pop()));
        }
    }

    return s;
};
