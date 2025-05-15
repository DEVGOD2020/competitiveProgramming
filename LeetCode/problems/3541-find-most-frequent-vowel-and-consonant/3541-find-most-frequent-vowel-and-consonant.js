/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let vowelFreq = _.countBy(
        s.split("").filter( (el)=>/[aeiou]/.test(el) )
    );

    let conFreq = _.countBy(
        s.split("").filter( (el)=>/[^aeiou]/.test(el) )
    );

    return Math.max(0,...Object.values(conFreq)) + 
    Math.max(0,...Object.values(vowelFreq));
};