/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let ver1 = version1.split(".");
    let ver2 = version2.split(".");

    let L = 0;
    let R = 0;
    while ((L < ver1.length) || (R < ver2.length)) {
        let val1 = L < ver1.length ? parseInt(ver1[L]) : 0;
        let val2 = R < ver2.length ? parseInt(ver2[R]) : 0;
        if (val1 < val2) { return -1; }
        if (val1 > val2) { return 1; }
        L++;
        R++;
    }

    return 0;
};