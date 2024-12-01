/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let I = 0;
    let myStr = "";
    while(I<s.length){
        myStr += _.reverse(s.substring(I,I+k).split("")).join("");
        I+=k;
        myStr += s.substring(I,I+k).split("").join("");
        I+=k;
    }
    return myStr;
};

