/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var getEncryptedString = function(s, k) {
    let arrCopy = s.split("");
    return arrCopy.map( (el, i)=>{return arrCopy[(i+k)%arrCopy.length]}).join("");
};