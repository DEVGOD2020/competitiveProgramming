/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    let S1 = s.slice(0,Math.floor(s.length/2));
    let S2 = s.slice(Math.floor(s.length/2),s.length);

    console.log(S1 + " " + S2);
    return S1 === S2;
};