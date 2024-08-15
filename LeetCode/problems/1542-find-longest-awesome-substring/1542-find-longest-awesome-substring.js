/**
 * @param {string} s
 * @return {number}
 */
var longestAwesome = function (s) {
    let mask = 0;
    let myMap = new Map();
    myMap.set(0, -1);
    let res = 1;
    for (let I = 0; I < s.length; I++) {
        mask ^= 1 << parseInt(s[I]);
        if (!myMap.has(mask)) {
            myMap.set(mask, I);
        }
        res = Math.max(res, I - myMap.get(mask));
        /*
        for (let A = 0; A < 10; A++) {
            let bit = 1 << A;
            res = Math.max(res, I - (myMap.get(mask ^ bit)) || 0);
        }*/
    }

    return res;
};