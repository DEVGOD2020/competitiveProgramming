/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let sum = 0;
    for(let I = 0; I<s.length; I++){
        sum += (26-(s.charCodeAt(I)-97))*(I+1);
    }
    return sum;
};