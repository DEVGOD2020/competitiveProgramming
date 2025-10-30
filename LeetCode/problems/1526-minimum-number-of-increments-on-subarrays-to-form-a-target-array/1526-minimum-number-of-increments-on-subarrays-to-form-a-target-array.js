/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function (target) {
    let ans = target[0];
    for (let I = 1; I < target.length; I++) {
        ans += Math.max(target[I] - target[I - 1], 0);
    }
    return ans;
};
