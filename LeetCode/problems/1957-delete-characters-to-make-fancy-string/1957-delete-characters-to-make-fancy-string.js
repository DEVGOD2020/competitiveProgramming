/**
 * @param {string} s
 * @return {string}
 */
 
var makeFancyString = function(s) {
    const nya = new RegExp("(.)\\1{2,}", 'g');
    return s.replace(nya, "$1$1");
};