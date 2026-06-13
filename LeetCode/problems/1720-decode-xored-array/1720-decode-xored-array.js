/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function(encoded, first) {
    return encoded.reduce((arr,el)=>{arr.push(arr.at(-1)^el);return arr;},[first]);
};