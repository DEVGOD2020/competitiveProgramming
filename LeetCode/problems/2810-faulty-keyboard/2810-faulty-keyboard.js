/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let ans = [];
    for(let chr of s){
        chr === 'i' ? ans.reverse() : ans.push(chr);
    }
    return ans.join("");
};