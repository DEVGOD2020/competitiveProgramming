/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
    let myMap = new Map();
    myMap.set(0, -1);

    const start = nums.reduce((el, sum) => el + sum) % p;
    if (start == 0) { return 0; }

    let pre = 0;
    let score = Infinity;
    for (let I = 0; I < nums.length; I++) {
        pre = (pre + nums[I]) % p;
        let target = (pre - start + p) % p;
        if (myMap.has(target)) {
            score = Math.min(score, I - myMap.get(target));
        }
        myMap.set(pre, I);
    }

    return score >= nums.length ? -1 : score;
};
