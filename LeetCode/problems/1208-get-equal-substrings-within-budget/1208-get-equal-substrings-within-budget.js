/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 */
var equalSubstring = function(s, t, maxCost) {
    let L = 0;
    let R = 0;
    let cost = 0;
    let max = 0;
    while(R<s.length){
        cost += Math.abs(s[R].charCodeAt(0)-t[R].charCodeAt(0));
        while(cost > maxCost){
            cost += - Math.abs(s[L].charCodeAt(0)-t[L].charCodeAt(0));
            L++;
        }
        max = Math.max(max, R-L+1)
        R++;
    }

    return max;
};