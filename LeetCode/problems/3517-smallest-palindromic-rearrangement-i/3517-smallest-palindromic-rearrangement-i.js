/**
 * @param {string} s
 * @return {string}
 */
var smallestPalindrome = function(s) {
    let str = s.slice(0,s.length/2).split("").sort((a,b)=>a.localeCompare(b));
    return str.join("")+
    ( (s.length%2)==1?s[Math.floor(s.length/2)]:"")+
    str.reverse().join("");
};