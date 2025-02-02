/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function (A, B) {
    let bitmask = 0n;
    let ans = [];
    let score = 0;
    for (let I in A) {
        let blahA = bitmask & (1n << BigInt(A[I]));
        if (blahA) {
            score++;
        } else {
            bitmask = bitmask | (1n << BigInt(A[I]));
        }

        let blahB = bitmask & (1n << BigInt(B[I]));
        if (blahB) {
            score++;
        } else {
            bitmask = bitmask | (1n << BigInt(B[I]));
        }

        ans.push(score);
    }

    return ans;
};