/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let I = 0;
    let myStr = "";
    while(I<s.length){
        myStr += s.slice(I,I+k).split("").reverse().join("");
        I += k;
        myStr += s.slice(I,I+k);
        I += k;
    }
    return myStr;
};