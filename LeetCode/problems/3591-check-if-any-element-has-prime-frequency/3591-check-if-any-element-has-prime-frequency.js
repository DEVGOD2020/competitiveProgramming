/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPrimeFrequency = function (nums) {
    const primes = new Set([2, 3, 5, 7, 11, 
    13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 
    53, 59, 61, 67, 71, 73, 79, 83, 89, 97]);

    return Object.values(_.countBy(nums) ).some( (el)=>primes.has(el));
};
